import Link from "next/link";
import React from "react";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import LogoutButton from "@/components/Sidebar/LogoutButton";
import NotesRenderer from "./NotesRenderer";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { FoldersListType, NotesListType } from "./Types";
import NewFolderButton from "./NewFolderButton";

async function Sidebar() {
  const supabase = createServerComponentClient({ cookies });
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
  const fetchFolders = async () => {
    // console.log("fetching folders, userID: ", user?.id);
    let { data: folders, error: fetchError } = await supabase
      .from("folders")
      .select("*")
      .eq("user_id", user?.id);

    if (fetchError) {
      console.log({ fetchError });
    }
    return folders;
  };

  //Supabase data fetching
  const notesList = await fetchNotes();
  const foldersList = await fetchFolders();
  console.log("foldersList: ", foldersList);
  return (
    <div className="box-border flex h-full w-full flex-col items-start justify-between bg-zinc-100 p-2 ">
      <Link href="/">
        <p className="pt-2 text-xl font-bold">InstaNotes</p>
      </Link>
      <NewFolderButton className="mb-4 mt-2" />
      <div className="flex h-full w-full flex-col items-start justify-start gap-2 overflow-y-auto">
        <NotesRenderer
          foldersList={foldersList as FoldersListType}
          notesList={notesList as NotesListType}
        />
      </div>
      {/* <p>{JSON.stringify(notesList)}</p> */}
      <div className="w-full">
        <div className=" mt-2  flex items-center justify-between rounded-md bg-white p-4 py-2">
          <div className="flex items-center ">
            <img
              src={user?.picture || "https://avatar.iran.liara.run/public/3"}
              alt="Profile Picture"
              className="h-10 w-10 rounded-full"
            />

            <div className="flex flex-col">
              <p className="ml-2 w-[15ch] truncate text-base font-medium">
                {user?.given_name + " " + user?.family_name}
              </p>
              <p className="ml-2 w-[17ch] truncate text-xs text-zinc-500">
                {user?.email}
              </p>
            </div>
          </div>
          <LogoutButton />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
