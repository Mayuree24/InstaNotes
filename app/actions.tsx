"use server";

import { createClient } from "@/utils/supabase/server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { cookies } from "next/headers";

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
export async function getFolders(userId: string) {
  const { createClient } = await import("@/utils/supabase/server");
  const { cookies } = await import("next/headers");
  const supabase = createClient(cookies());
  const { data: notes, error: fetchError } = await supabase
    .from("folders")
    .select("*")
    .eq("user_id", userId);

  if (fetchError) {
    console.log({ fetchError });
  }
  return notes;
}

export async function handleCreateFolder(formData: FormData) {
  const supabase = createClient(cookies());
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const { data: folder, error: createError } = await supabase
    .from("folders")
    .insert([{ name: formData.get("folderName"), user_id: user?.id }]);

  return folder;
}
