// import { useEffect } from "react";

import { createClient } from "@supabase/supabase-js"
import { Auth } from "@supabase/auth-ui-react"
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useNavigate } from "react-router-dom"

const supabase = createClient(
    "https://sjeyrvszztctcjmvaxzh.supabase.co",
    "eyJhbGciOiJIeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNqZXlydnN6enRjdGNqbXZheHpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA2NDg4NjgsImV4cCI6MjAwNjIyNDg2OH0.5b-sOPMPs6VPJw6YJMUmZ-NpEqQhX_H3AUkSdJkHyg4UzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNqZXlydnN6enRjdGNqbXZheHpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA2NDg4NjgsImV4cCI6MjAwNjIyNDg2OH0.5b-sOPMPs6VPJw6YJMUmZ-NpEqQhX_H3AUkSdJkHyg4"
)


function LoginPage() {

    const navigate = useNavigate();
  
    supabase.auth.onAuthStateChange (async (event) => {
        if (event !== "SIGNED_OUT") {
            // Foward to success URL
            navigate("/Home")
        } else {
            // Forward to localhost
            navigate("/")
        }
    })

  return (
    <div>
        <header>
            <Auth 
                supabaseClient={supabase}
                appearance={{ theme: ThemeSupa }}
                theme="dark"
                providers={["discord"]}
            />
        </header>
    </div>
  )
}

export default LoginPage
