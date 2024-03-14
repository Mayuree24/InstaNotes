import { NavComponent } from "../components/NavComponent";
import HeroSection from "../components/HeroSection";
import { createClient } from "@/utils/supabase/server";
import ConnectSupabaseSteps from "@/components/ConnectSupabaseSteps";
import SignUpUserSteps from "@/components/SignUpUserSteps";
import Header from "@/components/Header";
import ReviewSection from "@/components/ReviewSection";
import GetStartedSection from "@/components/GetStartedSection";

export default async function Index() {
  return (
    <div className="flex w-full flex-1 flex-col items-center gap-2">
      <NavComponent />

      {/* <div className="animate-in flex-1 flex flex-col gap-20 opacity-0 max-w-4xl px-3">
          
        </div> */}

      <HeroSection />
      <ReviewSection />
      <GetStartedSection />

      <footer className="flex w-full justify-center border-t border-t-foreground/10 p-8 text-center text-xs">
        <p>
          Built with love by{" "}
          <a
            href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
            target="_blank"
            className="font-bold hover:underline"
            rel="noreferrer"
          >
            a group at Conestoga College
          </a>
        </p>
      </footer>
    </div>
  );
}
