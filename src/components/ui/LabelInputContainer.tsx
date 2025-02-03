"use client";
import React from "react";

export const LabelInputContainer = ({ children }: { children: React.ReactNode }) => {
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true); 
  }, []);

  if (!isClient) {
    return null;
  }

  return <div className="space-y-2">{children}</div>;
};
