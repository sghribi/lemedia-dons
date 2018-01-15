export interface IDonation {
  amount: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  companyName?: string;
  address: string;
  city: string;
  zipCode: number;
  country: string;
  assignment: string;
}

export interface IDonationRequest extends IDonation {
  mode: string;
  stripeTokenId: string;
}
