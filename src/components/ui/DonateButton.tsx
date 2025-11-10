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
    const createCheckoutURL = `${SUPABASE_API_URL}/create-checkout-session`;
    const donationBody = {
      name: donationData.firstName ? donationData.firstName : null,
      lastName: donationData.lastName ? donationData.lastName : null,
      email: donationData.email ? donationData.email : null,
      amount: donationData.amount,
      country: providerIsDLocal ? `${donationData.countryCode}` : '',
      provider: donationData.paymentProvider,
    }

    try {
      const response = await fetch(createCheckoutURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(donationBody),
      });

      if (!response.ok) {
        throw new Error("Error creando checkout");
      }

      const data = await response.json();
      if(!data){
        alert(data.error || 'Error creando checkout');
        return;
      }
      if (providerIsDLocal) { 
        console.warn('paso por dlocal')
        window.location.href = data.checkout_url;
        setIsModalOpen(false);
      } 
      if(!providerIsDLocal){
        console.warn('paso por stripe')
        window.location.href = data.url;
        setIsModalOpen(false);
      }
      
    } catch (error) {
      console.error('Error processing donation:', error);
      alert('Hubo un error al procesar tu donación. Por favor, inténtalo de nuevo.');
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