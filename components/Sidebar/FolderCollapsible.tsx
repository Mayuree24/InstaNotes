import React from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { MdAdd } from "react-icons/md";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import SidebarNote from "./SidebarNote";
import Link from "next/link";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import DeleteFolder from "./DeleteFolderButton";
import EditFolderButton from "./EditFolderButton";
import { ScrollArea } from "../ui/scroll-area";

function FolderCollapsible({ folderName, notesList, folderId }: any) {
  const [parent] = useAutoAnimate({});
  return (
    <div className="overflow-clip rounded-md">
      <ContextMenu>
        <ContextMenuTrigger>
          <Collapsible defaultOpen>
            <CollapsibleTrigger className="w-full bg-white p-2 ">
              <div className=" flex items-center justify-between  px-1">
                <p>{folderName === "Default" ? "Notes" : folderName}</p>
                <div className="flex">
                  <Link href={`/dashboard/note/new?folderId=${folderId}`}>
                    <MdAdd className="rounded-full text-2xl text-zinc-500 hover:bg-zinc-400 hover:text-white" />
                  </Link>
                </div>
              </div>
            </CollapsibleTrigger>

            <CollapsibleContent className="rounded-b-md bg-white py-2 pt-0">
              <hr className="border border-zinc-100" />

              <div
                ref={parent}
                className="flex h-full w-full flex-col justify-start gap-2 overflow-y-auto rounded-md bg-white pt-2 "
              >
                {notesList?.map((note: any, index: number) => {
                  return <SidebarNote key={index} note={note} />;
                })}
              </div>
            </CollapsibleContent>
          </Collapsible>
        </ContextMenuTrigger>
        <ContextMenuContent className="w-64">
          <ContextMenuItem onSelect={(e) => e.preventDefault()}>
            <EditFolderButton folderId={folderId} />
          </ContextMenuItem>
          <ContextMenuItem onSelect={(e) => e.preventDefault()}>
            <DeleteFolder folderId={folderId} />
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    </div>
  );
}

export default FolderCollapsible;
