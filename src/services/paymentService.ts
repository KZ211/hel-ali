import type { PaymentIntegration, PaymentResponse } from '../types/payment';
import { getPaymentProvider } from '../utils/paymentProviders';

export class PaymentService {
  /**
   * Procesa un pago usando el proveedor apropiado según el país
   */
  static async processPayment(paymentData: PaymentIntegration): Promise<PaymentResponse> {
    const provider = getPaymentProvider(paymentData.country);
    
    console.log(`Procesando pago con ${provider} para ${paymentData.country}`);
    
    try {
      if (provider === 'dlocal') {
        return await this.processDLocalPayment(paymentData);
      } else {
        return await this.processStripePayment(paymentData);
      }
    } catch (error) {
      console.error('Error processing payment:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Error desconocido'
      };
    }
  }

  /**
   * Procesa pago con dLocal (implementación pendiente)
   */
  private static async processDLocalPayment(paymentData: PaymentIntegration): Promise<PaymentResponse> {
    // TODO: Implementar integración con dLocal
    console.log('Procesando con dLocal:', paymentData);
    
    // Simulación temporal
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          transactionId: `dlocal_${Date.now()}`,
          paymentUrl: `https://dlocal.com/payment/${Date.now()}`
        });
      }, 1000);
    });
  }

  /**
   * Procesa pago con Stripe (implementación pendiente)
   */
  private static async processStripePayment(paymentData: PaymentIntegration): Promise<PaymentResponse> {
    // TODO: Implementar integración con Stripe
    console.log('Procesando con Stripe:', paymentData);
    
    // Simulación temporal
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          transactionId: `stripe_${Date.now()}`,
          paymentUrl: `https://checkout.stripe.com/pay/${Date.now()}`
        });
      }, 1000);
    });
  }

  /**
   * Valida los datos de pago antes del procesamiento
   */
  static validatePaymentData(paymentData: PaymentIntegration): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];

    if (!paymentData.country) {
      errors.push('País es requerido');
    }

    if (!paymentData.currency) {
      errors.push('Moneda es requerida');
    }

    if (!paymentData.amount || paymentData.amount <= 0) {
      errors.push('Monto debe ser mayor a 0');
    }

    if (!paymentData.isAnonymous) {
      if (!paymentData.donorInfo?.firstName) {
        errors.push('Nombre es requerido para donaciones no anónimas');
      }
      if (!paymentData.donorInfo?.lastName) {
        errors.push('Apellido es requerido para donaciones no anónimas');
      }
      if (!paymentData.donorInfo?.email) {
        errors.push('Email es requerido para donaciones no anónimas');
      }
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }
}