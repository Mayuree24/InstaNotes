import { Button } from "@/components/ui/button";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";

export default function HeroSection() {
  // TODO: Add a form to collect emails and notify users when we launch
  return (
    <section className="w-full py-6 md:py-24 lg:py-24 xl:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_600px]">
          <div className="flex items-center justify-center">
            <div className="mx-auto aspect-video overflow-hidden rounded-3xl object-cover object-center shadow-lg shadow-pink-100">
              <img
                alt="Hero"
                className="h-max w-full object-cover"
                src="https://img.freepik.com/free-vector/cross-platform-software-concept-illustration_114360-7293.jpg?t=st=1708725979~exp=1708729579~hmac=c47c4ed40209da41dffbcd48dea87fbef6cce663a250c61f8748d15936832895&w=1380"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                The complete solution for cross-platform note taking
              </h1>
              <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl">
                Empower your team with the toolkit to revolutionize note-taking
                across all platforms.
              </p>
              <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl">
                Seamlessly. Securely. Efficiently.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <form className="">
                <RegisterLink>
                  <Button className="" size="lg" type="submit">
                    Sign Up
                  </Button>
                </RegisterLink>
              </form>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Sign up to get notified when we launch.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
