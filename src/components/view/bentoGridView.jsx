"use client";
import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid"; 

export function BentoGridView() {
  return (
    <section className="w-full mt-16 px-4">
      <BentoGrid>
        <BentoGridItem
          title="Modern Design"
          description="Create stunning designs with ease using our powerful tools and UI kits."
          header={<h3 className="font-bold text-xl">UI/UX Design</h3>}
          icon={<i className="fas fa-palette text-3xl text-blue-500"></i>}
        />
        <BentoGridItem
          title="Responsive Layout"
          description="Ensure your website looks great on all devices with our responsive layout components."
          header={<h3 className="font-bold text-xl">Responsive</h3>}
          icon={<i className="fas fa-mobile-alt text-3xl text-green-500"></i>}
        />
        <BentoGridItem
          title="SEO Optimized"
          description="Improve your website's visibility with our built-in SEO best practices."
          header={<h3 className="font-bold text-xl">SEO</h3>}
          icon={<i className="fas fa-search text-3xl text-yellow-500"></i>}
        />
        <BentoGridItem
          title="High Performance"
          description="Ensure fast load times and smooth performance for your web applications."
          header={<h3 className="font-bold text-xl">Performance</h3>}
          icon={<i className="fas fa-tachometer-alt text-3xl text-red-500"></i>}
        />
      </BentoGrid>
    </section>
  );
}
