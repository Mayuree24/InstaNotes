import React from "react";
import Link from "next/link";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
// import { cookies } from "next/headers";
// import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "./ui/button";
import AvatarComponent from "./AvatarComponent";

export async function NavComponent(props: any) {
  const { getUser } = getKindeServerSession();
  const kindeUser = await getUser();

  return (
    <nav className="flex w-full justify-center">
      <div className="my-4 flex w-full max-w-4xl items-center justify-between rounded-full px-8 py-2 text-sm shadow-md">
        <Link href="/">
          <p className="py-2 text-xl font-bold">InstaNotes</p>
        </Link>
        <div className="flex items-center gap-1">
          <Link
            className="rounded-full px-2 py-2 text-base text-zinc-500  transition-colors duration-200 ease-in-out hover:text-pink-500"
            href="/pricing"
          >
            Pricing
          </Link>
          <Link
            className="rounded-full px-2 py-2 text-base text-zinc-500  transition-colors duration-200 ease-in-out hover:text-pink-500"
            href="/about"
          >
            About Us
          </Link>
          {kindeUser ? (
            <div className="pl-2">
              <AvatarComponent />
            </div>
          ) : (
            <div>
              <Button variant="ghost">
                <LoginLink>Sign in</LoginLink>
              </Button>
              <Button>
                <RegisterLink>Sign up</RegisterLink>
              </Button>
            </div>
          )}

          {/* <Link
            className="rounded-full bg-pink-200 px-4 py-2 text-base font-bold text-pink-500 transition-colors duration-200 ease-in-out hover:text-pink-500"
            href="/dashboard"
          >
            Notes
          </Link> */}
        </div>
      </div>
      {kindeUser && (
        <div className="my-4 ml-2 flex items-center justify-center rounded-full px-8 py-2 text-lg text-pink-600 shadow-md shadow-pink-300 outline outline-pink-300">
          <Link href="/dashboard">Go to notes</Link>
        </div>
      )}
    </nav>
  );
}
// const supabase = createServerComponentClient({ cookies });

// const {
//   data: { user },
//   error,
// } = await supabase.auth.getUser();
