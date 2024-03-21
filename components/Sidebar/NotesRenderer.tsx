"use client";

import React, { useEffect, useState } from "react";
import SidebarNote from "./SidebarNote";
import { createClient } from "@/utils/supabase/client";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { getNotes } from "@/app/actions";

type NotesRendererProps = {
  notesList: { id: string; title: string }[];
};
function NotesRenderer({ notesList }: NotesRendererProps) {
  const { user } = useKindeBrowserClient();
  const supabase = createClient();
  const [notesListState, setnotesListState] = useState<any>(notesList);
  const [areNotesStale, setAreNotesStale] = useState(false);

  const channels = supabase
    .channel("custom-update-channel")
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table: "notes" },
      async (payload: any) => {
        console.log("notes changed, set as stale", payload);
        setAreNotesStale(true);
      },
    )
    .subscribe();

  useEffect(() => {
    const updateNotes = async () => {
      if (user?.id) {
        // calling server actions so that the userId check cannot be removed by end user as that would expose all notes
        const newNotes = await getNotes(user.id);
        setnotesListState(newNotes);
      }
    };
    updateNotes();
    setAreNotesStale(false);
    console.log("notes updated from useEffect");
  }, [areNotesStale, user]);

  const [parent] = useAutoAnimate({});

  return (
    <div
      ref={parent}
      className="flex h-full w-full flex-col justify-start gap-2 overflow-y-auto rounded-md bg-white pt-2 "
    >
      {notesListState?.map((note: any, index: number) => {
        return <SidebarNote key={index} note={note} />;
      })}
    </div>
  );
}

export default NotesRenderer;
