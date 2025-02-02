"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";
import { stickyScrollContent } from "../data/StickyScrollData"; 

export function StickyScrollReveal() {
  return (
    <div className="p-10">
      <StickyScroll content={stickyScrollContent} />
    </div>
  );
}
