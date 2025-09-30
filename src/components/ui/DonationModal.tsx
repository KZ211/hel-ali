import React, { useState, useEffect } from 'react';
import { CountrySelector } from './CountrySelector';
import { getPaymentProvider, getProviderInfo, getRecommendedCurrency, type PaymentProvider } from '../../utils/paymentProviders';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (donationData: DonationData) => void;
}

interface DonationData {
  country: string;
  amount: number;
  isAnonymous: boolean;
  firstName?: string;
  lastName?: string;
  email?: string;
  paymentProvider?: PaymentProvider;
  recommendedCurrency?: string;
}

interface CountryData {
  country: {
    name: string;
    code: string;
  };
}

export const DonationModal: React.FC<DonationModalProps> = ({ isOpen, onClose, onConfirm }) => {
  const [formData, setFormData] = useState<DonationData>({
    country: '',
    amount: 0,
    isAnonymous: false,
    firstName: '',
    lastName: '',
    email: ''
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [countryLoading, setCountryLoading] = useState(false);

  // Auto-detectar país usando ipregistry.co
  useEffect(() => {
    if (isOpen && !formData.country) {
      detectCountry();
    }
  }, [isOpen]);

  const detectCountry = async () => {
    setCountryLoading(true);
    try {
      const response = await fetch('https://api.ipregistry.co/?key=tryout');
      const data: CountryData = await response.json();
      
      // Validar que la respuesta tenga la estructura esperada
      const countryName = data?.country?.name || 'Argentina';
      const paymentProvider = getPaymentProvider(countryName);
      const recommendedCurrency = getRecommendedCurrency(countryName);
      
      setFormData(prev => ({
        ...prev,
        country: countryName,
        paymentProvider,
        recommendedCurrency
      }));
      
      console.log(`País detectado automáticamente: ${countryName}`);
      console.log(`Proveedor de pago asignado: ${paymentProvider}`);
      console.log(`Moneda recomendada: ${recommendedCurrency}`);
    } catch (error) {
      console.error('Error detecting country:', error);
      const fallbackCountry = 'Argentina';
      const paymentProvider = getPaymentProvider(fallbackCountry);
      const recommendedCurrency = getRecommendedCurrency(fallbackCountry);
      
      setFormData(prev => ({
        ...prev,
        country: fallbackCountry,
        paymentProvider,
        recommendedCurrency
      }));
    } finally {
      setCountryLoading(false);
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    // Validar monto
    if (!formData.amount || formData.amount <= 0) {
      newErrors.amount = 'El monto debe ser mayor a 0';
    }

    // Validar monto máximo para donaciones anónimas
    if (formData.isAnonymous && formData.amount > 1000) {
      newErrors.amount = 'El monto máximo para donaciones anónimas es $1000';
    }

    // Validar campos requeridos para donaciones no anónimas
    if (!formData.isAnonymous) {
      if (!formData.firstName?.trim()) {
        newErrors.firstName = 'El nombre es requerido';
      }
      if (!formData.lastName?.trim()) {
        newErrors.lastName = 'El apellido es requerido';
      }
      if (!formData.email?.trim()) {
        newErrors.email = 'El email es requerido';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'El email no es válido';
      }
    }

    if (!formData.country?.trim()) {
      newErrors.country = 'El país es requerido';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    try {
      await onConfirm(formData);
      // No cerrar automáticamente el modal aquí
      // El componente padre decidirá cuándo cerrarlo
    } catch (error) {
      console.error('Error processing donation:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setFormData({
      country: '',
      amount: 0,
      isAnonymous: false,
      firstName: '',
      lastName: '',
      email: '',
      paymentProvider: undefined,
      recommendedCurrency: undefined
    });
    setErrors({});
    onClose();
  };

  const handleInputChange = (field: keyof DonationData, value: any) => {
    setFormData(prev => {
      const newData = {
        ...prev,
        [field]: value
      };
      
      // Si el campo que cambió es el país, actualizar el proveedor de pago y moneda
      if (field === 'country' && value) {
        const paymentProvider = getPaymentProvider(value);
        const recommendedCurrency = getRecommendedCurrency(value);
        
        newData.paymentProvider = paymentProvider;
        newData.recommendedCurrency = recommendedCurrency;
        
        console.log(`País seleccionado: ${value}`);
        console.log(`Proveedor de pago: ${paymentProvider}`);
        console.log(`Moneda recomendada: ${recommendedCurrency}`);
      }
      
      return newData;
    });
    
    // Limpiar error del campo cuando el usuario empiece a escribir
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300"
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-100">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Realizar Donación</h2>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Cerrar modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="text-gray-700 text-start p-6 space-y-4">
          {/* País */}
          <div>
            <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
              País
            </label>
            <CountrySelector
              value={formData.country}
              onChange={(country) => handleInputChange('country', country)}
              disabled={countryLoading}
              error={errors.country}
            />
            {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country}</p>}
            {/* Información del proveedor de pago */}
            {formData.paymentProvider && (
              <div className="mt-2 p-3 bg-blue-50 border border-blue-200 rounded-md">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm font-medium text-blue-800">
                    Proveedor de pago: {formData.paymentProvider === 'dlocal' ? 'dLocal' : 'Stripe'}
                  </span>
                </div>
                {formData.recommendedCurrency && (
                  <p className="text-xs text-blue-600 mt-1">
                    Moneda recomendada: {formData.recommendedCurrency}
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Monto */}
          <div>
            <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
              Monto de Donación ($)
            </label>
            <input
              type="number"
              id="amount"
              min="1"
              max={formData.isAnonymous ? "1000" : undefined}
              value={formData.amount || ''}
              onChange={(e) => handleInputChange('amount', parseFloat(e.target.value) || 0)}
              className={`text-gray-700 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.amount ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Ingresa el monto"
            />
            {errors.amount && <p className="text-red-500 text-sm mt-1">{errors.amount}</p>}
            {formData.isAnonymous && (
              <p className="text-sm text-gray-500 mt-1">Monto máximo para donaciones anónimas: $1000</p>
            )}
          </div>

          {/* Donación Anónima */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="anonymous"
              checked={formData.isAnonymous}
              onChange={(e) => handleInputChange('isAnonymous', e.target.checked)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="anonymous" className="ml-2 block text-sm text-gray-700">
              Realizar donación anónima
            </label>
          </div>

          {/* Campos personales (solo si no es anónimo) */}
          {!formData.isAnonymous && (
            <div className="space-y-4 pt-4 border-t border-gray-200">
              <h3 className="text-sm font-medium text-gray-700">Información Personal</h3>
              
              {/* Nombre */}
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre *
                </label>
                <input
                  type="text"
                  id="firstName"
                  value={formData.firstName || ''}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.firstName ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Tu nombre"
                />
                {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
              </div>

              {/* Apellido */}
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                  Apellido *
                </label>
                <input
                  type="text"
                  id="lastName"
                  value={formData.lastName || ''}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.lastName ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Tu apellido"
                />
                {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email || ''}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="tu@email.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
            </div>
          )}

          {/* Botones */}
          <div className="flex space-x-3 pt-6">
            <button
              type="button"
              onClick={handleClose}
              className="flex-1 px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
              disabled={isLoading}
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="flex-1 px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Procesando...' : 'Confirmar Donación'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};