export type KycStatus = 'UNVERIFIED' | 'PENDING' | 'APPROVED' | 'REJECTED';

export interface User {
  id: string;
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  kycStatus: KycStatus;
  twoFactorEnabled: boolean;
  createdAt: string;
}
