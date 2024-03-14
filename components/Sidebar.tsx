import Link from "next/link";
import React from "react";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import LogoutButton from "./LogoutButton";

async function Sidebar() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  return (
    <div className="box-border flex h-full w-full flex-col items-start justify-between bg-zinc-100 ">
      <div className="flex w-full flex-col justify-start gap-4 bg-red-100 p-4">
        <p className="text-xl font-bold">InstaNotes</p>
        <Link className="" href="/note/noteId">
          <div className="flex flex-col rounded-md bg-white px-3 py-2 animate-in">
            <p className="mb-0 text-base ">Note Title</p>
            <p className="text-xs text-zinc-500">Date Added/Updated</p>
          </div>
        </Link>
      </div>
      <div className="w-full p-4">
        <div className=" flex  items-center justify-between rounded-md bg-white p-4">
          <div className="flex items-center ">
            <img
              src="https://avatar.iran.liara.run/public/3"
              alt="Profile Picture"
              className="h-10 w-10 rounded-full"
            />

            <div className="flex flex-col">
              <p className="ml-2 w-[10ch] truncate text-base font-medium">
                {user?.email}
              </p>
              <p className="ml-2 text-xs text-zinc-500">Personal Workspace</p>
            </div>
          </div>
          <LogoutButton />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
