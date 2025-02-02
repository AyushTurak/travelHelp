import React from "react";
import { Button } from "@/components/ui/button";
import { LabelInputContainer } from "../ui/LabelInputContainer";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

interface SignUpViewProps {
  email: string;
  password: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  handleSignUp: (e: React.FormEvent) => void;
}

export default function SignUpView({
  email,
  password,
  setEmail,
  setPassword,
  handleSignUp,
}: SignUpViewProps) {
  return (
    <form className="space-y-4" onSubmit={handleSignUp}>
      <LabelInputContainer>
        <Label>Email Address</Label>
        <Input
          type="email"
          placeholder="your-email@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </LabelInputContainer>

      <LabelInputContainer>
        <Label>Password</Label>
        <Input
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </LabelInputContainer>

      <Button type="submit" className="w-full">
        Sign Up &rarr;
      </Button>
    </form>
  );
}
