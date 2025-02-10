"use client";

import React from "react";
import { FloatingDock } from "../ui/floating-dock";
import { footerData } from "../data/footerData";

export function FooterView() {
  return (
    <div className="w-full flex justify-center items-center mb-2">
      <FloatingDock 
        mobileClassName="flex flex-row flex-nowrap justify-center items-center gap-4 px-4 py-2" 
        items={footerData} 
      />
    </div>
  );
}
