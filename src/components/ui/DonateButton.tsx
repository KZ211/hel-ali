import React from 'react';

export const DonateButton: React.FC = () => {
  const handleDonate = () => {
    alert('¡Gracias por tu interés en donar! Te redirigiremos a nuestra página de donaciones.');
    // Aquí iría la redirección a la página de donaciones
  };

  return (
    <button
      onClick={handleDonate}
      className="bg-pink-200 text-pink-800 hover:bg-pink-300 px-8 py-3 rounded-md text-lg font-medium transition-colors"
    >
      Donar Ahora
    </button>
  );
};