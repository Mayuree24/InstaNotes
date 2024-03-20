import React from "react";
import Link from "next/link";

type SidebarNoteProps = {
  note: { id: string; title: string };
};

function SidebarNote({ note }: SidebarNoteProps) {
  return (
    <Link href={`/dashboard/note/${note.id}`} key={note.id}>
      <div className="rounded-m group mx-2 flex items-center justify-between rounded-md px-3 py-1 transition-colors hover:bg-zinc-200">
        <p className="text-md truncate">{note.title}</p>
        <p className="text invisible truncate text-xs text-zinc-500/80 group-hover:visible">
          19/12/24
        </p>
      </div>
    </Link>
  );
}

export default SidebarNote;
