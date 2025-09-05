import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Simulación de envío de formulario
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Aquí iría la lógica real de envío del formulario
      console.log('Formulario enviado:', formData);
      
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setError('Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      {isSubmitted ? (
        <div className="text-center py-8">
          <div className="text-green-500 text-5xl mb-4">✓</div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">¡Mensaje Enviado!</h3>
          <p className="text-gray-600">Gracias por contactarnos. Te responderemos pronto.</p>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="bg-light-blue mt-6 text-teal-600 hover:text-teal-700 font-medium"
          >
            Enviar otro mensaje
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Envíanos un Mensaje</h3>
          
          {error && (
            <div className="bg-red-50 text-red-700 p-3 rounded-md mb-4">
              {error}
            </div>
          )}
          
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-2">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 mb-2">Mensaje</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            ></textarea>
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 rounded-md text-white font-medium transition-colors ${
              isSubmitting ? 'bg-light-blue cursor-not-allowed' : 'bg-light-blue hover:bg-teal-700'
            }`}
          >
            {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
          </button>
        </form>
      )}
    </div>
  );
};