import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://iryiobhmmvdnvwfovuye.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable__ebSt_oeNFqErCtk1ZUfSg_P0V6vNt7';

// Exportamos la instancia para poder importarla en otros componentes
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);