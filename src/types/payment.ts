export interface PaymentIntegration {
  provider: 'dlocal' | 'stripe';
  country: string;
  currency: string;
  amount: number;
  donorInfo?: {
    firstName?: string;
    lastName?: string;
    email?: string;
  };
  isAnonymous: boolean;
}

export interface PaymentResponse {
  success: boolean;
  transactionId?: string;
  paymentUrl?: string;
  error?: string;
}

export interface DLocalConfig {
  apiKey: string;
  secretKey: string;
  environment: 'sandbox' | 'production';
}

export interface StripeConfig {
  publishableKey: string;
  secretKey: string;
  environment: 'test' | 'live';
}

export interface PaymentConfig {
  dlocal: DLocalConfig;
  stripe: StripeConfig;
}