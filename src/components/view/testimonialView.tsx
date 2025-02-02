import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { testimonialData } from "../data/testimonialData";

export function TestimonialView() {
  return <AnimatedTestimonials testimonials={testimonialData} />;
}
