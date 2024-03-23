import React from "react";
import { MdOutlineEdit } from "react-icons/md";
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
import { handleFolderNameUpdateAction } from "@/app/actions";

function EditFolderButton({ folderId }: { folderId: string }) {
  return (
    <Dialog>
      <DialogTrigger className="flex items-center gap-2">
        <MdOutlineEdit />
        <p>Rename Folder</p>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Rename Folder</DialogTitle>
          <DialogDescription>Set a new name for this folder:</DialogDescription>
        </DialogHeader>

        <form
          className="flex items-center justify-stretch gap-2"
          action={handleFolderNameUpdateAction}
        >
          <input
            type="text"
            name="folderName"
            className="w-full rounded-md border border-zinc-100 p-2"
            onKeyDown={(e) => {
              e.code === "Space" ? e.stopPropagation() : null;
            }}
          />
          <input
            type="text"
            name="folderId"
            value={folderId}
            className="hidden"
          />
          <DialogTrigger>
            <Button type="submit">Rename</Button>
          </DialogTrigger>
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

export default EditFolderButton;
