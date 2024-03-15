"use client";

import React from "react";
import RichTextNote from "@/components/RichTextNote";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createClient } from "@/utils/supabase/client";

function NoteClientComponent({
  note,
  noteId,
  userId,
}: {
  note: any;
  noteId?: string | null;
  userId: string;
}) {
  const [noteContent, setNoteContent] = React.useState(
    "<p>Hello InstaNoters, Begin writing the notes you want</p>",
  );
  const [noteTitle, setNoteTitle] = React.useState("Note Title");
  const supabase = createClient();
  const handleNoteSave = async () => {
    console.log("note:", noteContent);
    console.log("title:", noteTitle);
    if (userId && !noteId) {
      const { error } = await supabase.from("notes").insert({
        content: noteContent,
        title: noteTitle,
        user_id: userId,
      });
      if (error) {
        console.log(error);
      }
    } else {
      console.log("updating note");
      console.log("note:", noteContent);
      console.log("title:", noteTitle);
      const { error } = await supabase
        .from("notes")
        .update({
          content: noteContent,
          title: noteTitle,
        })
        .eq("id", noteId)
        .select();

      if (error) {
        console.log(error);
      }
      console.log("note updated");
    }
  };
  const handleNoteDelete = async () => {
    const confirmed = confirm("Are you sure you want to delete this note?");
    if (noteId && confirmed) {
      const { error } = await supabase
        .from("notes")
        .delete()
        .eq("id", noteId)
        .select();
      if (error) {
        console.log(error);
      }
      console.log("note deleted");
    }
  };
  return (
    <div className="h-full p-4">
      <div className="mb-4 flex items-center justify-between">
        <Input
          className="title w-[30ch] rounded-full"
          defaultValue={note.title || "Note Title"}
          onChange={(e) => setNoteTitle(e.target.value)}
          placeholder="Note Title"
        />
        <div className="flex gap-2">
          <Button onClick={handleNoteSave} className="rounded-full">
            Save
          </Button>
          <Button
            variant="ghost"
            onClick={handleNoteDelete}
            className="rounded-full text-red-500 hover:bg-red-100 hover:text-red-600"
          >
            Delete
          </Button>
        </div>
      </div>
      <RichTextNote noteContent={note} setNoteContent={setNoteContent} />
    </div>
  );
}

export default NoteClientComponent;
