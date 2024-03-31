export type FolderType = {
  id: string;
  name: string;
  created_at: string;
  updated_at: string;
  user_id: string;
};
export type FoldersListType = FolderType[];

export type NoteType = {
  id: string;
  title: string;
  content: string;
  tags: string[];
  created_at: string;
  updated_at: string;
  user_id: string;
  folder_id: string;
};
export type NotesListType = NoteType[];

export type FolderStructureType = {
  id: string;
  name: string;
  created_at: string;
  updated_at: string;
  user_id: string;
  notes: NotesListType;
};
export type FolderStructureListType = FolderStructureType[];
