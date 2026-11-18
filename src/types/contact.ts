export interface ContactFormFields {
  name: string;
  email: string;
  phone: string;
  message?: string;
}

export type ContactSubmitResult =
  | { ok: true; name: string }
  | { ok: false; reason: "duplicate" | "error" };
