import { createClient } from '@supabase/supabase-js'
import { config } from 'dotenv'
config();

const supabase = createClient(process.env.URL,process.env.API_KEY)

console.log("Connected to Supabase DB");

export default supabase
