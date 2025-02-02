import { useSupabase } from "@/providers/SupabaseProvider";
import { useRouter } from "next/router";  // <-- Change here if you're using Next.js 12 or earlier
import React from "react";

export default function useLoginLogic() {
  const supabase = useSupabase();
  const router = useRouter();  // This should work with Next.js 13+ (App Router)
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(""); // Clear previous messages

    // Check if email and password are provided
    if (!email || !password) {
      setMessage("Please enter both email and password.");
      return;
    }

    const { error, user } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setMessage(`Error: ${error.message}`);
    } else if (user) {
      setMessage("Logged in successfully!");
      router.push("/");  // Redirect after login
    } else {
      setMessage("Unknown error occurred.");
    }
  };

  return { email, password, setEmail, setPassword, handleLogin, message };
}
