import { supabase } from "./supabase";


export async function getClient() {
  
const { data: client, error } = await supabase
  .from('contacts')
    .select('*')
  
  if (error) {
    console.error(error);
    throw new Error('Failed to fetch client data');
  }
    return client;
  }



export async function submitForm(formData) {
  const { data, error } = await supabase.from("contacts").insert([formData]);
  if (error) {
    console.error('Supabase error:', error);
    throw new Error(`Failed to submit form: ${error.message}`);
  }
  return data;
}
  



