"use client";

import React from "react";
import { TextRevealCard } from "../ui/text-reveal-card";
import { mottoData } from "../data/mottoData";

export function MottoView() {
  return (
    <div className="flex items-center justify-center w-full">
      <TextRevealCard text={mottoData.text} revealText={mottoData.revealText}>
      </TextRevealCard>
    </div>
  );
}
