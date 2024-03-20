"use client";

import React, { useRef, useState, useMemo, useEffect } from "react";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

const QuillNoSSRWrapper = dynamic(
  async () => {
    const { default: RQ } = await import("react-quill");
    return ({ ...props }) => <RQ {...props} />;
  },
  {
    ssr: false,
  },
);

export default function RichTextNote({
  setNoteContent,
  noteContent,
  className,
  NoteId,
}: {
  noteContent?: Record<string, any>;
  setNoteContent: (note: string) => void;
  className?: string;
  NoteId?: string;
}) {
  const reactQuillRef = useRef(null);
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="mb-4 h-full animate-in">
      {isClient ? (
        <QuillNoSSRWrapper
          ref={reactQuillRef}
          className="mb-4 h-full w-full bg-white"
          theme="snow"
          onChange={(content: string): void => {
            setNoteContent(content);
          }}
          defaultValue={
            noteContent?.content ||
            "Hello InstaNoters, Begin writing the notes you want"
          }
        />
      ) : null}
    </div>
  );
}
