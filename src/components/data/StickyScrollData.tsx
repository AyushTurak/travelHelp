import Image from "next/image";

export const stickyScrollContent = [
  {
    title: "Uluwatu Temple",
    description:
      "Uluwatu Temple is a stunning sea temple located on a clifftop in southern Bali. Known for its dramatic setting and spectacular sunset views, it's one of the island's most iconic attractions. Visitors can enjoy the temple, traditional Kecak dance performances, and breathtaking coastal scenery.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Uluwatu Temple
      </div>
    ),
  },
  {
    title: "Sacred Monkey Forest Sanctuary",
    description:
      "The Sacred Monkey Forest Sanctuary in Ubud is home to over 700 long-tailed macaques. It offers visitors a unique experience to interact with monkeys in a lush jungle setting. The forest is also home to beautiful ancient temples and lush greenery, making it a must-visit for nature lovers.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/images/image.png" // Reference to the image in the public folder
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Sacred Monkey Forest"
        />
      </div>
    ),
  },
  {
    title: "Tegallalang Rice Terraces",
    description:
      "The Tegallalang Rice Terraces in Ubud are famous for their beautiful landscapes and traditional Balinese rice farming techniques. The lush green terraces provide a picturesque backdrop for photography, and visitors can enjoy scenic walks and explore the local culture.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Tegallalang Rice Terraces
      </div>
    ),
  },
  {
    title: "Seminyak Beach",
    description:
      "Seminyak Beach is known for its vibrant atmosphere, upscale resorts, and stunning sunsets. It's the perfect spot for surfing, lounging by the beach, or enjoying world-class dining. Seminyak's chic boutiques and nightlife scene make it a top destination for tourists seeking both relaxation and excitement.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Seminyak Beach
      </div>
    ),
  },
];
