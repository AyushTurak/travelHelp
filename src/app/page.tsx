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
import { PlaceholdersAndVanishInputView } from "@/components/view/PlaceholdersAndVanishInputView";

export default function Page() {
  const supabase = useSupabase();
  const [user, setUser] = useState<any>(null);
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
    return <div className="h-screen flex items-center justify-center text-white text-xl">Loading...</div>;
  }

  return user ? (
    <main className="relative flex min-h-screen flex-col items-center justify-start bg-gradient-to-br from-blue-500 to-purple-600 text-white overflow-hidden">

      <div className="w-full">
        <NavBarView />
      </div>

   
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 justify-items-center items-center">
          <div className="w-full md:w-[50%]">
            <ReviewCardView />
          </div>
          <div className="w-full md:w-[50%]">
            <PlaceholdersAndVanishInputView />
          </div>
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
