"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

type Card = {
  id: number;
  name: string;
  designation: string;
  content: React.ReactNode;
};

interface CardStackProps {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}

export const CardStack: React.FC<CardStackProps> = ({ items, offset = 10, scaleFactor = 0.06 }) => {
  const CARD_OFFSET = offset;
  const SCALE_FACTOR = scaleFactor;
  const [cards, setCards] = useState<Card[]>(items);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const startFlipping = () => {
      intervalRef.current = setInterval(() => {
        setCards((prevCards) => {
          const newArray = [...prevCards];
          newArray.unshift(newArray.pop()!);
          return newArray;
        });
      }, 5000);
    };

    startFlipping();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [items]); // Ensure items are stable to prevent unnecessary restarts

  return (
    <div className="relative h-60 w-60 md:h-60 md:w-96">
      {cards.map((card, index) => (
        <motion.div
          key={card.id}
          className="absolute dark:bg-black bg-white h-60 w-60 md:h-60 md:w-96 rounded-3xl p-4 shadow-xl border border-neutral-200 dark:border-white/[0.1] shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between"
          style={{ transformOrigin: "top center" }}
          animate={{
            top: index * -CARD_OFFSET,
            scale: 1 - index * SCALE_FACTOR,
            zIndex: cards.length - index,
          }}
        >
          <div className="font-normal text-neutral-700 dark:text-neutral-200">{card.content}</div>
          <div>
            <p className="text-neutral-500 font-medium dark:text-white">{card.name}</p>
            <p className="text-neutral-400 font-normal dark:text-neutral-200">{card.designation}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
