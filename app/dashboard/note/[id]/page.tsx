import NoteClientComponent from "@/components/NoteClientComponent";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

type NoteProps = {
  params: {
    id: string;
  };
};

async function Note({ params }: NoteProps) {
  const supabase = createClient(cookies());
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  if (error) {
    return null;
  }
  const fetchNoteDetails = async () => {
    let { data: note, error: fetchError } = await supabase
      .from("notes")
      .select("*")
      .eq("id", params.id);
    if (fetchError) {
      console.log({ fetchError });
    }
    return note;
  };
  const note = await fetchNoteDetails();
  if (note) {
    console.log(note[0]);
  }
  return (
    <NoteClientComponent
      noteId={params.id || null}
      userId={user?.id as string}
      note={note && note[0]}
    />
  );
}

export default Note;
