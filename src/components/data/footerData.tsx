// File: footerData.tsx

import { IconHome, IconMapPin, IconPhone, IconBrandFacebook, IconBrandTwitter, IconBrandInstagram } from "@tabler/icons-react";
import Image from "next/image";

export const footerData = [
  {
    title: "Home",
    icon: <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: "#",
  },
  {
    title: "Destinations",
    icon: <IconMapPin className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: "#",
  },
  {
    title: "Contact Us",
    icon: <IconPhone className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: "#",
  },
  {
    title: "Facebook",
    icon: <IconBrandFacebook className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: "#",
  },
  {
    title: "Twitter",
    icon: <IconBrandTwitter className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: "#",
  },
  {
    title: "Instagram",
    icon: <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: "#",
  },

  // {
  //   title: "About Us",
  //   icon: (
  //     <Image
  //       src="https://www.example.com/logo.png" 
  //       width={20}
  //       height={20}
  //       alt="Company Logo"
  //     />
  //   ),
  //   href: "#",
  // },
];
