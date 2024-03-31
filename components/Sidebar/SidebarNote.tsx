import React from "react";
import Link from "next/link";
import { NoteType } from "./Types";
import dayjs from "dayjs";

type SidebarNoteProps = {
  note: NoteType;
};

function SidebarNote({ note }: SidebarNoteProps) {
  const formattedDate = dayjs(note.created_at).format("DD/MM/YYYY");
  return (
    <Link href={`/dashboard/note/${note.id}`} key={note.id}>
      <div className="rounded-m te group mx-2 flex items-center justify-between rounded-md px-3 py-1 transition-colors hover:bg-zinc-200">
        <p className="truncate text-sm text-zinc-700">{note.title}</p>
        <p className="text invisible truncate text-xs text-zinc-500/80 group-hover:visible">
          {formattedDate}
        </p>
      </div>
    </Link>
  );
}

export default SidebarNote;
