"use client";
import React from "react";
import { CiSearch } from "react-icons/ci";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "../ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import { Button } from "../ui/button";
import { handleSearchNotesAction } from "@/app/actions";
import { useFormState } from "react-dom";
import { NoteType } from "./Types";
import { DateFormat, StripHTMLTags } from "../utils";
import Link from "next/link";

function NotesSearchButton() {
  const [searchedNotes, action] = useFormState(handleSearchNotesAction, []);
  console.log("searchedNotes: ", searchedNotes);
  return (
    <Dialog>
      <DialogTrigger>
        <CiSearch className="text-2xl text-zinc-500" />
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Search Notes</DialogTitle>
        </DialogHeader>
        <form
          className="flex items-center justify-stretch gap-2"
          action={action}
        >
          <input
            type="text"
            name="searchQuery"
            className="w-full rounded-md border border-zinc-100 p-2"
            onKeyDown={(e) => {
              e.code === "Space" ? e.stopPropagation() : null;
            }}
          />
          <Button type="submit">Search</Button>
        </form>
        <div className="flex flex-col gap-4">
          {searchedNotes?.map((note: NoteType) => {
            return (
              <Link href={`/dashboard/note/${note.id}`}>
                <DialogTrigger className="w-full" key={note.id}>
                  <div className="flex flex-col rounded-md px-4 py-2 shadow-md">
                    <div
                      className="flex items-center justify-between  "
                      key={note.id}
                    >
                      <p>{note.title}</p>
                      <p className="text-xs text-zinc-500">
                        {DateFormat(note.created_at)}
                      </p>
                    </div>
                    <p className="mt-1 w-[30ch] truncate text-start text-xs text-zinc-600">
                      {StripHTMLTags(note.content)}
                    </p>
                  </div>
                </DialogTrigger>
              </Link>
            );
          })}
        </div>
        <DialogFooter>
          <DialogTrigger>
            <Button variant="ghost">Cancel</Button>
          </DialogTrigger>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default NotesSearchButton;
