"use server";

import { getSql } from "./db";
import type { ContactFormFields, ContactSubmitResult } from "../types/contact";

export async function submitContactForm(
  data: ContactFormFields,
): Promise<ContactSubmitResult> {
  const sql = getSql();
  const clientName = data.name;
  const email = data.email;
  const phoneNumber = data.phone;
  const message = data.message || "";

  try {
    await sql`
      INSERT INTO contacts ("clientName", email, "phoneNumber", message)
      VALUES (${clientName}, ${email}, ${phoneNumber}, ${message})
    `;
    return { ok: true, name: clientName };
  } catch (error: unknown) {
    const code = (error as { code?: string } | null)?.code;
    if (code === "23505") {
      return { ok: false, reason: "duplicate" };
    }
    console.error("Failed to submit contact form:", error);
    return { ok: false, reason: "error" };
  }
}
