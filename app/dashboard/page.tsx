import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import Link from "next/link";
import React from "react";

async function Dashboard() {
  const supabase = createClient(cookies());
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }
  console.log("user:", user.id);
  return (
    <div className="grid h-dvh w-full place-content-center">
      <Link
        className="rounded-md bg-green-400 px-4 py-2 text-center text-green-950"
        href={`/dashboard/note/newNote`}
      >
        Create a new note
      </Link>
    </div>
  );
}

export default Dashboard;
