const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = "https://mryuksqjqbavxnlcpdxl.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1yeXVrc3FqcWJhdnhubGNwZHhsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEzODg3NDUsImV4cCI6MjA2Njk2NDc0NX0.QfBaYWmILu8-iLlTPFqWbAC57-fosGpRLXWZP36eNSE";

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;
