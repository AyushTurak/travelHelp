"use client";

import { CardStack } from "../ui/card-stack";
import { REVIEW_CARDS } from "../data/reviewCards";  

export function ReviewCardView() {
  return (
    <div className="h-[20rem] flex items-center justify-center w-full">
      <CardStack items={REVIEW_CARDS} />
    </div>
  );
}
