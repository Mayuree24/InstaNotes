"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { FaTrashAlt } from "react-icons/fa";
import { handleFolderDeleteAction } from "@/app/actions";

function DeleteFolder({ folderId }: { folderId: string }) {
  const handleFolderDelete = () => {
    console.log("Delete folder");
  };
  return (
    <Dialog>
      <DialogTrigger className="flex items-center gap-2">
        <FaTrashAlt className="text-red-400" />
        <p>Delete Folder</p>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete Folder</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this folder?
          </DialogDescription>
        </DialogHeader>
        <form action={handleFolderDeleteAction}>
          <input
            type="text"
            name="folderId"
            className="hidden"
            value={folderId}
          />
          <Button type="submit">Delete</Button>
        </form>
        <DialogFooter>
          <DialogTrigger>
            <Button variant="ghost">Cancel</Button>
          </DialogTrigger>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default DeleteFolder;
