"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createClient } from "@/utils/supabase/client";
import React from "react";
import dynamic from "next/dynamic";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
const RichTextNote = dynamic(() => import("@/components/Notes/RichTextNote"));

type NoteProps = {
  params: {
    id: string;
  };
};

function Note({ params }: NoteProps) {
  const router = useRouter();
  const { user } = useKindeBrowserClient();
  const [noteContent, setNoteContent] = React.useState(
    "<p>Hello InstaNoters, Begin writing the notes you want</p>",
  );
  const [noteTitle, setNoteTitle] = React.useState("Note Title");
  const supabase = createClient();
  const handleNoteSave = async () => {
    // console.log("note:", noteContent);
    // console.log("id:", params.id);
    // console.log("title:", noteTitle);
    if (user) {
      const { error, data } = await supabase
        .from("notes")
        .insert({
          content: noteContent,
          title: noteTitle,
          user_id: user?.id,
        })
        .select("*");

      if (error) {
        console.log(error);
      }
      if (data) {
        router.push(data[0].id);
      }
    }
  };
  return (
    <div className="h-full p-4 animate-in">
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
      <RichTextNote
        setNoteContent={setNoteContent}
        NoteId={params.id}
        noteContent={undefined}
        className={undefined}
      />
    </div>
  );
}

export default Note;
