import { neon } from "@neondatabase/serverless";
import { readFileSync } from "fs";

const envContent = readFileSync(new URL("../.env.local", import.meta.url), "utf8");
const match = envContent.match(/^DATABASE_URL="?([^"\n]+)"?$/m);
if (!match) {
  throw new Error("DATABASE_URL not found in .env.local");
}

const sql = neon(match[1]);

await sql`
  CREATE TABLE IF NOT EXISTS contacts (
    id SERIAL PRIMARY KEY,
    "clientName" TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    "phoneNumber" TEXT NOT NULL,
    message TEXT NOT NULL DEFAULT '',
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
  )
`;

const rows = await sql`
  SELECT column_name, data_type FROM information_schema.columns
  WHERE table_name = 'contacts' ORDER BY ordinal_position
`;

console.log("contacts table ready:");
console.table(rows);
