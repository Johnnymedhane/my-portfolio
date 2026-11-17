import { supabase } from "./supabase";
import type { ContactRow, ContactSubmission } from "../types/contact";

export async function getClient(): Promise<ContactRow[]> {
  const { data: client, error } = await supabase.from("contacts").select("*");

  if (error) {
    console.error(error);
    throw new Error("Failed to fetch client data");
  }
  return client as ContactRow[];
}

export async function submitForm(formData: ContactSubmission) {
  const { data, error } = await supabase.from("contacts").insert([formData]);
  if (error) {
    console.error("Supabase error:", error);
    throw new Error(`Failed to submit form: ${error.message}`);
  }
  return data;
}
