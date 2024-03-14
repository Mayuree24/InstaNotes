"use client";

import RichTextNote from "@/components/RichTextNote";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createClient } from "@/utils/supabase/client";
import React from "react";

type NoteProps = {
  params: {
    id: string;
  };
};

function Note({ params }: NoteProps) {
  const [noteContent, setNoteContent] = React.useState(
    "<p>Hello InstaNoters, Begin writing the notes you want</p>",
  );
  const [noteTitle, setNoteTitle] = React.useState("Note Title");
  const supabase = createClient();
  const getUserId = async () => {
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();
    if (error) {
      return null;
    }
    return user?.id;
  };
  const handleNoteSave = async () => {
    // console.log("note:", noteContent);
    // console.log("id:", params.id);
    // console.log("title:", noteTitle);
    if (await getUserId()) {
      const { error } = await supabase.from("notes").insert({
        content: noteContent,
        title: noteTitle,
        user_id: await getUserId(),
      });
      if (error) {
        console.log(error);
      }
    }
  };
  return (
    <div className="h-full p-4">
      <div className="mb-4 flex items-center justify-between">
        <Input
          className="title w-[30ch] rounded-full"
          onChange={(e) => setNoteTitle(e.target.value)}
          placeholder="Note Title"
        />
        <Button onClick={handleNoteSave} className="rounded-full">
          Save
        </Button>
      </div>
      <RichTextNote setNoteContent={setNoteContent} NoteId={params.id} />
    </div>
  );
}

export default Note;
