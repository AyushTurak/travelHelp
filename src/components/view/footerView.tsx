"use client";

import React from "react";
import { FloatingDock } from "../ui/floating-dock";
import { footerData } from "../data/footerData";

export function FooterView() {
  return (
    <div className="flex flex-col justify-between min-h-[4rem] w-full">
      <div className="flex-grow flex items-center justify-center">
        <FloatingDock
          mobileClassName="translate-y-20"
          items={footerData}
        />
      </div>

    </div>
  );
}
