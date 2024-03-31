"use server";

import { createClient } from "@/utils/supabase/server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { cookies } from "next/headers";

export async function getNotesAction(userId: string) {
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
export async function getFoldersAction(userId: string) {
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

export async function handleCreateFolderAction(formData: FormData) {
  const supabase = createClient(cookies());
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const { data: folder, error: createError } = await supabase
    .from("folders")
    .insert([{ name: formData.get("folderName"), user_id: user?.id }]);

  return folder;
}

export async function handleFolderNameUpdateAction(formData: FormData) {
  const supabase = createClient(cookies());
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const { data: folder, error: error } = await supabase
    .from("folders")
    .update({ name: formData.get("folderName") })
    .eq("id", formData.get("folderId"))
    .eq("user_id", user?.id);

  if (error) {
    console.log({ error });
  }
  return folder;
}
export async function handleFolderDeleteAction(formData: FormData) {
  const supabase = createClient(cookies());
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const { data: folder, error: error } = await supabase
    .from("folders")
    .delete()
    .eq("id", formData.get("folderId"))
    .eq("user_id", user?.id);

  if (error) {
    console.log({ error });
  }
  return folder;
}

export async function handleSearchNotesAction(
  prevState: any,
  queryData: FormData,
) {
  const supabase = createClient(cookies());
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const { data: notes, error: fetchError } = await supabase
    .from("notes")
    .select("*")
    .or(
      `content.ilike.%${queryData.get("searchQuery")}%,title.ilike.%${queryData.get("searchQuery")}%`,
    )
    .eq("user_id", user?.id);

  if (fetchError) {
    console.log({ fetchError });
  }
  return notes;
}
