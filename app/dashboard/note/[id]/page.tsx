import NoteClientComponent from "@/components/Notes/NoteClientComponent";
import { createClient } from "@/utils/supabase/server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { cookies } from "next/headers";

type NoteProps = {
  params: {
    id: string;
  };
};

async function Note({ params }: NoteProps) {
  const supabase = createClient(cookies());
  const { getUser } = getKindeServerSession();
  const user = await getUser();

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
