import Link from "next/link";
import React from "react";

function Sidebar() {
  return (
    <div className="flex h-full flex-col justify-start gap-4 bg-zinc-100 p-4">
      <p className="text-xl font-bold">InstaNotes</p>
      <Link href="/note/noteId">
        <div className="flex flex-col rounded-md bg-white px-3 py-2 animate-in">
          <p className="mb-0 text-base ">Note Title</p>
          <p className="text-xs text-zinc-500">Date Added/Updated</p>
        </div>
      </Link>
    </div>
  );
}

export default Sidebar;
