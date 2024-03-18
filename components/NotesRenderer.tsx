"use client";

import React, { useEffect, useState } from "react";
import SidebarNote from "./SidebarNote";
import { createClient } from "@/utils/supabase/client";

type NotesRendererProps = {
  notesList: { id: string; title: string }[];
};
function NotesRenderer({ notesList }: NotesRendererProps) {
  const supabase = createClient();
  const [notesListState, setnotesListState] = useState(notesList);
  const [areNotesStale, setAreNotesStale] = useState(false);
  const channels = supabase
    .channel("custom-update-channel")
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table: "notes" },
      async (payload: any) => {
        setAreNotesStale(true);
        notesListState?.map((note, index) => {
          if (note.id === payload?.new?.id) {
            notesListState[index] = payload?.new as {
              id: string;
              title: string;
            };
            setnotesListState([...notesListState]);
          }
        });
      },
    )
    .subscribe();

  useEffect(() => {
    const fetchNotes = async () => {
      let { data: notes, error: fetchError } = await supabase
        .from("notes")
        .select("*");

      if (fetchError) {
        console.log({ fetchError });
      }
      return notes;
    };

    fetchNotes().then((notesList) => {
      setnotesListState(notesList as { id: string; title: string }[]);
    });
  }, [areNotesStale]);

  return (
    <div className="flex h-full w-full flex-col justify-start gap-2 overflow-y-auto rounded-md bg-white pt-2 ">
      {notesListState?.map((note, index) => {
        return <SidebarNote key={index} note={note} />;
      })}
    </div>
  );
}

export default NotesRenderer;
