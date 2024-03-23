import { createClient } from "@/utils/supabase/client";
import React from "react";
import { IoMdAdd } from "react-icons/io";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { handleCreateFolderAction } from "@/app/actions";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

function NewFolderButton({ className }: { className: string }) {
  return (
    <Collapsible className={cn(className, "w-full overflow-clip rounded-md")}>
      <CollapsibleTrigger className="w-full bg-white p-2">
        <div className="flex w-full items-center justify-center px-1 pb-2">
          <p className=" text-base">Create New Folder</p>
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent className="mb-[60px] rounded-b-md bg-white py-2 pt-0">
        <form
          className="flex flex-col gap-2 p-2"
          action={handleCreateFolderAction}
        >
          <Input required name="folderName" placeholder="Folder Name" />
          <div className="flex w-full items-center justify-between gap-4">
            <Button
              type="submit"
              className="focus:ring-green-5 w-full rounded-md bg-green-400 p-2 font-semibold text-green-800 hover:bg-green-500 hover:text-white"
            >
              Create
            </Button>
            <CollapsibleTrigger>
              <Button type="reset" variant="ghost" className="w-full">
                Cancel
              </Button>
            </CollapsibleTrigger>
          </div>
        </form>
      </CollapsibleContent>
    </Collapsible>
  );
  {
    /* // <button onClick={handleCreateFolder} className="flex w-full items-center justify-center gap-2 rounded-md bg-white px-3 py-2 animate-in">
    //   <IoMdAdd />
    //   <p className="mb-0 text-base ">New Folder</p>
    // </button> */
  }
}

export default NewFolderButton;
