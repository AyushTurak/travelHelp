import { useSupabase } from "@/providers/SupabaseProvider";
import { useRouter } from "next/navigation";
import React from "react";

export default function useSignUpLogic() {
  const supabase = useSupabase();
  const router = useRouter();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    const { error } = await supabase.auth.signUp({ email, password });

    if (error) {
      setMessage(`Error: ${error.message}`);
    } else {
      setMessage("Check your email for verification!");
      router.push("/"); // Redirect after signup
    }
  };

  return { email, password, setEmail, setPassword, handleSignUp, message };
}
