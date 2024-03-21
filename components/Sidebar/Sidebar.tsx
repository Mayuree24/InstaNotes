import Link from "next/link";
import React from "react";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import LogoutButton from "@/components/Sidebar/LogoutButton";
import { IoMdAdd } from "react-icons/io";
import NotesRenderer from "./NotesRenderer";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

async function Sidebar() {
  const supabase = createServerComponentClient({ cookies });
  // const {
  //   data: { user },
  //   error,
  // } = await supabase.auth.getUser();
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const fetchNotes = async () => {
    let { data: notes, error: fetchError } = await supabase
      .from("notes")
      .select("*")
      .eq("user_id", user?.id);

    if (fetchError) {
      console.log({ fetchError });
    }
    return notes;
  };
  let notesList = await fetchNotes();
  const fetchFolders = async () => {
    let { data: folders, error: fetchError } = await supabase
      .from("folders")
      .select("*")
      .eq("user_id", user?.id);

    if (fetchError) {
      console.log({ fetchError });
    }
    return folders;
  };

  return (
    <div className="box-border flex h-full w-full flex-col items-start justify-between bg-zinc-100 p-2 ">
      <Link href="/">
        <p className="pt-2 text-xl font-bold">InstaNotes</p>
      </Link>
      <Link className="my-2 w-full" href="/dashboard/note/new">
        <div className="flex w-full items-center justify-center gap-2 rounded-md bg-white px-3 py-2 animate-in">
          <IoMdAdd />
          <p className="mb-0 text-base "> New Note</p>
        </div>
      </Link>
      <NotesRenderer notesList={notesList as { id: string; title: string }[]} />
      <div className="w-full">
        <div className=" mt-2  flex items-center justify-between rounded-md bg-white p-4 py-2">
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
