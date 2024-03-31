import { NavComponent } from "../components/NavComponent";
import HeroSection from "../components/HeroSection";
import { createClient } from "@/utils/supabase/server";
import ReviewSection from "@/components/ReviewSection";
import GetStartedSection from "@/components/GetStartedSection";

export default async function Index({
  searchParams,
}: {
  searchParams: { message: string; code: string };
}) {
  return (
    <div className="flex w-full flex-1 flex-col items-center gap-2">
      <NavComponent jwt={searchParams.code} />
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
            <strong>Group6</strong> at Conestoga College
          </a>
        </p>
      </footer>
    </div>
  );
}
