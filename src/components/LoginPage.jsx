import { useEffect } from "react";
import { createClient } from "@supabase/supabase-js"
import { Auth } from "@supabase/auth-ui-react"
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useNavigate } from "react-router-dom"


// Create a Supabase client instance
const supabase = createClient(
    "https://sjeyrvszztctcjmvaxzh.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNqZXlydnN6enRjdGNqbXZheHpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA2NDg4NjgsImV4cCI6MjAwNjIyNDg2OH0.5b-sOPMPs6VPJw6YJMUmZ-NpEqQhX_H3AUkSdJkHyg4"
)

function LoginPage() {
    // Navigate function from react-router-dom to handle navigation
    const navigate = useNavigate();

    useEffect(() => {
        const authListener = supabase.auth.onAuthStateChange(async (event) => {
            if (event === "SIGNED_IN") {
                // If the user is signed in, navigate to the Home page
                navigate("/Home")
            } else {
                // If the user is not signed in, navigate to the login page
                navigate("/")
            }
        });

        // Clean up the listener when the component unmounts
        return () => {
            authListener.data.onAuthStateChange = null;
        };
    }, [navigate]);

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

export default LoginPage;
