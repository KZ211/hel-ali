// Tipos de proveedores de pago disponibles
export type PaymentProvider = 'dlocal' | 'stripe';

// Países que utilizarán dLocal (América Latina principalmente)
export const DLOCAL_COUNTRIES = [
  'Argentina',
  'Bolivia', 
  'Brasil',
  'Chile',
  'Colombia',
  'Costa Rica',
  'República Dominicana',
  'Ecuador',
  'El Salvador',
  'Guatemala',
  'Honduras',
  'México',
  'Nicaragua',
  'Panamá',
  'Paraguay',
  'Perú',
  'Uruguay',
  'Venezuela'
] as const;

// Función para determinar el proveedor de pago basado en el país
export const getPaymentProvider = (country: string): PaymentProvider => {
  // Normalizar el nombre del país para comparación
  const normalizedCountry = country.trim();
  
  // Si el país está en la lista de dLocal, usar dLocal
  if (DLOCAL_COUNTRIES.includes(normalizedCountry as any)) {
    return 'dlocal';
  }
  
  // Para todos los demás países, usar Stripe
  return 'stripe';
};

// Función para obtener información del proveedor
export const getProviderInfo = (provider: PaymentProvider) => {
  const providerConfig = {
    dlocal: {
      name: 'dLocal',
      description: 'Procesador de pagos para América Latina',
      supportedMethods: ['credit_card', 'bank_transfer', 'cash', 'wallet'],
      currencies: ['USD', 'ARS', 'BRL', 'CLP', 'COP', 'MXN', 'PEN', 'UYU']
    },
    stripe: {
      name: 'Stripe',
      description: 'Procesador de pagos global',
      supportedMethods: ['credit_card', 'apple_pay', 'google_pay'],
      currencies: ['USD', 'EUR', 'GBP', 'CAD', 'AUD', 'JPY']
    }
  };
  
  return providerConfig[provider];
};

// Función para validar si un país es soportado
export const isCountrySupported = (country: string): boolean => {
  const provider = getPaymentProvider(country);
  return provider === 'dlocal' || provider === 'stripe';
};

// Función para obtener la moneda recomendada basada en el país
export const getRecommendedCurrency = (country: string): string => {
  const currencyMap: Record<string, string> = {
    'Argentina': 'ARS',
    'Brasil': 'BRL', 
    'Chile': 'CLP',
    'Colombia': 'COP',
    'México': 'MXN',
    'Perú': 'PEN',
    'Uruguay': 'UYU',
    'Estados Unidos': 'USD',
    'Canadá': 'CAD',
    'Reino Unido': 'GBP',
    'Francia': 'EUR',
    'Alemania': 'EUR',
    'España': 'EUR',
    'Italia': 'EUR',
    'Australia': 'AUD',
    'Japón': 'JPY'
  };
  
  return currencyMap[country] || 'USD';
};