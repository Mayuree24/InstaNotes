import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import Link from "next/link";
import React from "react";

async function Dashboard() {
  return (
    <div className="grid h-dvh w-full place-content-center">
      <Link
        className="rounded-md bg-green-400 px-4 py-2 text-center font-semibold text-green-800 hover:bg-green-500 hover:text-white"
        href={`/dashboard/note/new`}
      >
        Create a new note
      </Link>
    </div>
  );
}

export default Dashboard;
