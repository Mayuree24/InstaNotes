"use server";

export async function getNotes(userId: string) {
  const { createClient } = await import("@/utils/supabase/server");
  const { cookies } = await import("next/headers");
  const supabase = createClient(cookies());
  const { data: notes, error: fetchError } = await supabase
    .from("notes")
    .select("*")
    .eq("user_id", userId);

  if (fetchError) {
    console.log({ fetchError });
  }
  return notes;
}
