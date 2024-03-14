"use client";

import React, { useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function RichTextNote({
  className,
  NoteId,
}: {
  className?: string;
  NoteId?: string;
}) {
  const [value, setValue] = useState("");
  const reactQuillRef = useRef(null);

  return (
    <div className="mb-4 h-full">
      <ReactQuill
        ref={reactQuillRef}
        className="mb-4 h-full w-full bg-white"
        theme="snow"
        defaultValue="Hello InstaNoters, Begin writing the notes you want"
      />
    </div>
  );
}
