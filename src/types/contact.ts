export interface ContactFormFields {
  name: string;
  email: string;
  phone: string;
  message?: string;
}

export interface ContactSubmission {
  clientName: string;
  email: string;
  phoneNumber: string;
  message: string;
}

export interface ContactRow extends ContactSubmission {
  id?: number;
  created_at?: string;
}
