import RichTextNote from "@/components/RichTextNote";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

type NoteProps = {
  params: {
    id: string;
  };
};

function Note({ params }: NoteProps) {
  return (
    <div className="h-full p-4">
      <div className="mb-4 flex items-center justify-between">
        <Input
          className="title w-[30ch] rounded-full"
          placeholder="Note Title"
        />
        <Button className="rounded-full">Save</Button>
      </div>
      <RichTextNote NoteId={params.id} />
    </div>
  );
}

export default Note;
