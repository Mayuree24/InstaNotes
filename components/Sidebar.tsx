import Link from "next/link";
import React from "react";

function Sidebar() {
  return (
    <div className="flex flex-col justify-start gap-4 px-4 py-4">
      <div className="flex items-center gap-2">
        <img
          src="https://www.sabre.com/wp/wp-content/uploads/garry-wiseman-022222.jpg"
          alt="avatar img"
          className="h-10 w-10 rounded-full bg-blue-400 object-cover p-[2px]"
        />
        <p>User's Workspace</p>
      </div>
      <div className="flex flex-col gap-3 rounded-md bg-white px-2 py-4 text-zinc-500 shadow-md animate-in *:rounded-md *:px-2 *:transition-colors hover:*:bg-zinc-400 hover:*:text-white">
        <Link href="/note/noteId">Implementation</Link>
        <Link href="/note/noteId">Research</Link>
        <Link href="/note/noteId">Development</Link>
        <Link href="/note/noteId">Notes</Link>
      </div>
      <div className="flex flex-col gap-3 rounded-md bg-white px-2 py-4 text-zinc-500 shadow-md animate-in *:rounded-md *:px-2 *:transition-colors hover:*:bg-zinc-400 hover:*:text-white">
        <Link href="/note/noteId">Android Studio</Link>
        <Link href="/note/noteId">Capstone Project</Link>
      </div>
    </div>
  );
}

export default Sidebar;
