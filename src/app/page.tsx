"use client";
import { useEffect, useState } from "react";
import { useSupabase } from "@/providers/SupabaseProvider";
import AuthComponent from "@/components/AuthComponent";
import { ReviewCardView } from "@/components/view/reviewCardView";
import { ImageSlider } from "@/components/view/imageSliderView";
import { NavBarView } from "@/components/view/navBarView";
import { MottoView } from "@/components/view/mottoView";
import { FooterView } from "@/components/view/footerView";
import { TestimonialView } from "@/components/view/testimonialView";
import TravelPage from "@/components/view/carouselView";
import { AvatarCirclesDemo } from "../components/view/avatarView";
import type { User } from "@supabase/supabase-js";

export default function Page() {
  const supabase = useSupabase();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
      setLoading(false);
    };

    fetchUser();
  }, [supabase]);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center text-white text-xl">
        Loading...
      </div>
    );
  }

  return user ? (
    <main className="relative flex flex-col min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 text-white overflow-hidden">
      {/* Navbar */}
      <div className="w-full">
        <NavBarView />
      </div>

      {/* Content Wrapper (Ensures Footer is Visible) */}
      <div className="flex-grow flex flex-col items-center justify-start w-full">
        <div className="w-full mt-8">
          <ImageSlider />
        </div>

        <div className="w-full mt-16 px-4">
          <MottoView />
        </div>

        <div className="w-full mt-16 px-4">
          <TestimonialView />
        </div>

        <div className="w-full mt-16 px-4">
          <TravelPage />
        </div>

        <div className="w-full mt-16 px-4 flex flex-col items-center gap-8 lg:grid lg:grid-cols-2">
          <ReviewCardView />
          <AvatarCirclesDemo />
        </div>
      </div>

      <div className="w-full mt-16 pt-8 pb-4 flex-shrink-0">
        <FooterView />
      </div>
    </main>
  ) : (
    <AuthComponent />
  );
}
