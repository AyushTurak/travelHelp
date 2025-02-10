"use client";

import { CardStack } from "../ui/card-stack";
import { REVIEW_CARDS } from "../data/reviewCards";  

export function ReviewCardView() {
  return (
    <div className="h-[22rem] flex items-center justify-center w-full px-4">
      <div className="max-w-[95%] md:max-w-[70%] text-wrap break-words">
        <CardStack items={REVIEW_CARDS} />
      </div>
    </div>
  );
}
