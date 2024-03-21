import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { FiLogOut } from "react-icons/fi";

async function AvatarComponent() {
  const { getUser } = getKindeServerSession();
  const kindeUser = await getUser();

  let userInitials;

  if (kindeUser && kindeUser?.given_name && kindeUser?.family_name) {
    userInitials = kindeUser?.given_name[0] + kindeUser?.family_name[0];
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={kindeUser?.picture || "na"} />
          <AvatarFallback>{userInitials}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <LogoutLink>Logout</LogoutLink>
          <DropdownMenuShortcut>
            <FiLogOut />
          </DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default AvatarComponent;
