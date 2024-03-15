import React from "react";
import DeployButton from "./DeployButton";
import AuthButton from "./AuthButton";
import Link from "next/link";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

export async function NavComponent(props: any) {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  return (
    <nav className="flex w-full justify-center">
      <div className="my-4 flex w-full max-w-4xl items-center justify-between rounded-full px-8 py-2 text-sm shadow-md">
        <Link href="/">
          <p className="py-2 text-xl font-bold">InstaNotes</p>
        </Link>
        <div className="flex items-center">
          <Link
            className="rounded-full px-4 py-2 text-base text-zinc-500 transition-colors duration-200 ease-in-out hover:text-pink-500"
            href="/pricing"
          >
            Pricing
          </Link>
          <Link
            className="rounded-full px-4 py-2 text-base text-zinc-500 transition-colors duration-200 ease-in-out hover:text-pink-500"
            href="/about"
          >
            About Us
          </Link>
          {user ? (
            <p className="w-[10ch] truncate px-4 text-center text-base text-zinc-500">
              Hi, {user.email}
            </p>
          ) : (
            <Link
              className="rounded-full px-4 py-2 text-base text-zinc-500 transition-colors duration-200 ease-in-out hover:bg-pink-200 hover:text-pink-500"
              href="/login"
            >
              Login
            </Link>
          )}
          <Link
            className="rounded-full bg-pink-200 px-4 py-2 text-base font-bold text-pink-500 transition-colors duration-200 ease-in-out hover:text-pink-500"
            href="/dashboard"
          >
            Notes
          </Link>
        </div>
      </div>
    </nav>
  );
}
