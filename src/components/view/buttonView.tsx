"use client";
import React from "react";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalTrigger } from "../ui/animated-modal";
import { motion } from "framer-motion";
import Image from "next/image";
import { modalData } from "../data/buttondata";

export function AnimatedModalView() {
  return (
    <div className="py-40 flex items-center justify-center">
      {modalData.map((data, index) => (
        <Modal key={index}>
          <ModalTrigger className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4 flex justify-center group/modal-btn">
            <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
              Book your flight 
            </span>
            <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
              ✈️
            </div>
          </ModalTrigger>
          <ModalBody className="bg-white dark:bg-neutral-900">
            <ModalContent className="bg-white dark:bg-neutral-900">
              <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
                Book your trip to{" "}
                <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                  {data.destination}
                </span>{" "}
                now! ✈️
              </h4>
              <div className="flex justify-center items-center">
                {data.images.map((image, idx) => (
                  <motion.div
                    key={"image" + idx}
                    style={{ rotate: Math.random() * 20 - 10 }}
                    whileHover={{ scale: 1.1, rotate: 0, zIndex: 100 }}
                    whileTap={{ scale: 1.1, rotate: 0, zIndex: 100 }}
                    className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
                  >
                    <Image
                      src={image}
                      alt={`${data.destination} images`}
                      width="500"
                      height="500"
                      className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
                    />
                  </motion.div>
                ))}
              </div>
              <div className="py-10 flex flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-sm mx-auto">
                {data.amenities.map((amenity, idx) => (
                  <div key={idx} className="flex items-center justify-center">
                    <span className="text-neutral-700 dark:text-neutral-300 text-sm">{amenity}</span>
                  </div>
                ))}
              </div>
            </ModalContent>
            <ModalFooter className="gap-4">
              <button className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28">
                Cancel
              </button>
              <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
                Book Now
              </button>
            </ModalFooter>
          </ModalBody>
        </Modal>
      ))}
    </div>
  );
}
