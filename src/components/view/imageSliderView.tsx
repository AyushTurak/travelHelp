"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ImagesSlider } from "../ui/images-slider";
import { imageSlideShowData } from "../data/imageSlideShowData";  
import { TextGenerateEffect } from "../ui/text-generate-effect";
import {AnimatedModalView}    from "../view/buttonView"

export function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = imageSlideShowData.map((item) => item.imageUrl);
  const altTexts = imageSlideShowData.map((item) => item.altText);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % altTexts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [altTexts.length]);

  return (
    <ImagesSlider className="h-[40rem]" images={images}>
      <div className="z-50 flex flex-col justify-center items-center">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <TextGenerateEffect
            words={altTexts[currentIndex]}
            className="text-white font-semibold" 
          />
        </motion.div>
  
  <AnimatedModalView/>

      </div>


    </ImagesSlider>
  );
}
