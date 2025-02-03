"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useSupabase } from "@/providers/SupabaseProvider";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function AuthComponent() {
  const supabase = useSupabase();
  const router = useRouter();
  
  // Declare all state hooks at the top so they are always called in the same order.
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isSignUp, setIsSignUp] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  // Use a single submission handler that calls the appropriate method based on isSignUp.
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    setIsLoading(true);

    if (isSignUp) {
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) {
        setMessage(`Error: ${error.message}`);
      } else {
        setMessage("Check your email for verification!");
        router.push("/");
      }
    } else {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        setMessage(`Error: ${error.message}`);
      } else {
        setMessage("Logged in successfully!");
        router.push("/");
      }
    }
    setIsLoading(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
      <Card className="w-full max-w-sm p-6 rounded-2xl shadow-xl bg-white dark:bg-gray-900">
        <CardContent className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
            {isSignUp ? "Create an Account" : "Welcome Back"}
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400">
            {isSignUp
              ? "Sign up to start your journey!"
              : "Log in to continue where you left off!"}
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label>Email Address</Label>
              <Input
                type="email"
                placeholder="your-email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label>Password</Label>
              <Input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <Button type="submit" className="w-full">
              {isSignUp ? "Sign Up" : "Log In"} &rarr;
            </Button>
          </form>

          {isLoading && (
            <div className="flex justify-center items-center mt-4">
              <div className="w-16 h-4 bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 animate-shimmer"></div>
            </div>
          )}

          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            {isSignUp
              ? "Already have an account?"
              : "Don't have an account?"}{" "}
            <button
              onClick={() => setIsSignUp((prev) => !prev)}
              className="text-blue-500 hover:underline"
            >
              {isSignUp ? "Log in" : "Sign up"}
            </button>
          </p>

          {message && (
            <p className="text-center text-sm text-red-500">{message}</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
