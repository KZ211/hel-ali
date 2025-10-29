import React, { useState } from 'react';
import { DonationModal } from './DonationModal';
import { type PaymentProvider } from '../../utils/paymentProviders';

interface DonationData {
  country: string;
  countryCode: string;
  amount: number;
  isAnonymous: boolean;
  firstName?: string;
  lastName?: string;
  email?: string;
  paymentProvider?: PaymentProvider;
}

export const DonateButton: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const SUPABASE_API_URL = import.meta.env.PUBLIC_SUPABASE_API_URL;

  const handleDonateClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleDonationConfirm = async (donationData: DonationData) => {
    const providerIsDLocal = donationData.paymentProvider === 'dlocal';
    const providerURL = `${SUPABASE_API_URL}/create-checkout-session`;
    const dLocalBody = {
      amount: donationData.amount,
      country: `${donationData.countryCode}`,
      provider: 'dlocal',
    };
    const stripeBody = {
      provider: 'stripe',
      line_items: [
        {
          price_data: {
            unit_amount: donationData.amount,
          },
        },
      ],
    };
    const currentBody = providerIsDLocal ? dLocalBody : stripeBody;
    try {
      const response = await fetch(providerURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(currentBody),
      });

      if (!response.ok) {
        throw new Error("Error creando checkout");
      }

      const data = await response.json();
      // Abrir la URL de checkout en una nueva ventana
      if(!data){
        alert(data.error || 'Error creando checkout');
        return;
      }
      if (data.checkout_url) { 
        window.location.href = data.checkout_url;
        // Cerrar el modal después de redirigir exitosamente al checkout
        setIsModalOpen(false);
      } 
      if(data.url){
        window.location.href = data.url;
      }
      
    } catch (error) {
      console.error('Error processing donation:', error);
      alert('Hubo un error al procesar tu donación. Por favor, inténtalo de nuevo.');
      // No cerrar el modal en caso de error para que el usuario pueda intentar de nuevo
      throw error;
    }
  };

  return (
    <>
      <button
        onClick={handleDonateClick}
        className="bg-active text-primary hover:bg-primary hover:text-active px-8 py-3 rounded-md text-lg font-medium transition-colors"
      >
        Donar Ahora
      </button>
      
      <DonationModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onConfirm={handleDonationConfirm}
      />
    </>
  );
};