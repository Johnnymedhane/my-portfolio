import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://howbjlndmjmbcahllebv.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhvd2JqbG5kbWptYmNhaGxsZWJ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU0MzI5NjEsImV4cCI6MjA4MTAwODk2MX0.Z0qMqMGEcWH7ArAg3J1KbZ_sONbdq64oMbCLlFd-fj4";

const supabase = createClient(supabaseUrl, supabaseKey);

export { supabase };
export default supabase;
