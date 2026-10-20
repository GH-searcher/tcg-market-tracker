
// TCG Market Tracker - Supabase connection
const SUPABASE_URL = "https://sqyhxcwctsqihseevpdz.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_ZAWWLVCYeo7FwHWZehtxmA_m3aD_xY3";

async function fetchCards() {
  const response = await fetch(
    `${SUPABASE_URL}/rest/v1/cards?select=*`,
    {
      headers: {
        apikey: SUPABASE_PUBLISHABLE_KEY
      }
    }
  );

  if (!response.ok) {
    throw new Error(`Supabase error: ${response.status}`);
  }

  return await response.json();
}
