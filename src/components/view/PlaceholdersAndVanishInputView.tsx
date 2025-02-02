"use client";
import { PlaceholdersAndVanishInput } from "../ui/placeholders-and-vanish-input";

export function PlaceholdersAndVanishInputView() {
  const placeholders = [
    "Where would you like to go?",
    "What is your dream destination?",
    "How long is your vacation?",
    "What type of activities do you enjoy?",
    "Enter your budget for the trip",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <div className="h-[15rem] flex flex-col justify-center items-center px-4">
      <h2 className="mb-3 sm:mb-8 text-xl text-center sm:text-5xl dark:text-white text-black">
        Plan Your Next Adventure
      </h2>
      <PlaceholdersAndVanishInput
        placeholders={placeholders} 
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
  
}
