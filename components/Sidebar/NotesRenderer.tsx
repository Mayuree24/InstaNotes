"use client";

import React, { useEffect, useState } from "react";
import SidebarNote from "./SidebarNote";
import { createClient } from "@/utils/supabase/client";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { getFoldersAction, getNotesAction } from "@/app/actions";
import FolderCollapsible from "./FolderCollapsible";
import {
  FolderStructureListType,
  FolderStructureType,
  FoldersListType,
  NotesListType,
  NoteType,
} from "./Types";
import { ScrollArea } from "../ui/scroll-area";

type NotesRendererProps = {
  notesList: NotesListType;
  foldersList: FoldersListType;
};
function NotesRenderer({ notesList, foldersList }: NotesRendererProps) {
  const { user } = useKindeBrowserClient();
  const supabase = createClient();

  const getFolderStructure = () => {
    const folderStructure: FolderStructureListType = foldersListState?.map(
      (folder) => {
        const notes: NotesListType = notesListState?.filter(
          (note: NoteType) => {
            return note.folder_id === folder.id;
          },
        );
        return {
          ...folder,
          notes,
        };
      },
    );
    const unassignedNotes = notesListState?.filter((note) => {
      return !note?.folder_id;
    });
    if (unassignedNotes.length > 0) {
      folderStructure.unshift({
        name: "Notes",
        id: "unassigned",
        notes: unassignedNotes as NoteType[],
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        user_id:
          user?.id ||
          "dummy userId and rest of the fields, it doesnt matter, its for displaying unassigned notes only",
      });
    }
    // console.log("Unassigned Notes: ", unassignedNotes);
    // console.log("Folder Structure: ", folderStructure);
    return folderStructure;
  };
  const [notesListState, setNotesListState] =
    useState<NotesListType>(notesList);
  const [areNotesStale, setAreNotesStale] = useState(false);
  const [foldersListState, setFoldersListState] =
    useState<FoldersListType>(foldersList);
  const [areFoldersStale, setAreFoldersStale] = useState(false);
  const [folderStructureState, setFolderStructureState] =
    useState<FolderStructureListType>(getFolderStructure());

  const NotesChannel = supabase
    .channel("custom-update-channel")
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table: "notes" },
      async (payload: any) => {
        setAreNotesStale(true);
      },
    )
    .subscribe();
  const FoldersChannel = supabase
    .channel("custom-folders-update-channel")
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table: "folders" },
      async (payload: any) => {
        // console.log("Folders changed, set as stale", payload);
        setAreFoldersStale(true);
      },
    )
    .subscribe();

  useEffect(() => {
    const updateNotes = async () => {
      if (user?.id) {
        // calling server actions so that the userId check cannot be removed by end user as that would expose all notes
        const newNotes = await getNotesAction(user.id);
        setNotesListState(newNotes as NotesListType);
      }
    };
    updateNotes();
    setAreNotesStale(false);
    // console.log("Notes updated from useEffect", notesListState);
  }, [areNotesStale, user]);

  useEffect(() => {
    const updateFolders = async () => {
      if (user?.id) {
        const newFolders = await getFoldersAction(user.id);
        setFoldersListState(newFolders as FoldersListType);
      }
    };
    updateFolders();
    setAreFoldersStale(false);
    // console.log("Folders updated from useEffect");
  }, [areFoldersStale, user]);

  const [parent] = useAutoAnimate({});

  useEffect(() => {
    const folderStructure = getFolderStructure();
    setFolderStructureState(folderStructure);
    // console.log(
    //   "Folder Structure updated from useEffect",
    //   folderStructureState,
    // );
  }, [foldersListState, notesListState]);

  // UI Rendering (it got confusing)
  return folderStructureState?.map((folder, index) => {
    return (
      <div ref={parent} className="w-full">
        <FolderCollapsible
          key={index}
          folderName={folder.name}
          notesList={folder.notes}
          folderId={folder.id}
        />
      </div>
    );
  });
  // <div ref={parent} className="h-full w-full">
  //   <FolderCollapsible notesList={notesListState} />
  // </div>
}

export default NotesRenderer;
