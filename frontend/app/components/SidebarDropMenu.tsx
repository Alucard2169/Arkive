"use client"

import { ChevronUp, Import, Keyboard, Link, LogOut, Settings, User2 } from "lucide-react";

import {
  SidebarMenuButton
} from "@/components/ui/sidebar";



import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { logout } from "../utils/logout";



const SidebarDropMenu = () => {

    return ( 
        <DropdownMenu>
      <DropdownMenuTrigger asChild>
      <SidebarMenuButton>
                    <User2 /> Username
                    <ChevronUp className="ml-auto" />
                  </SidebarMenuButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Username</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="flex w-full justify-between">
            Settings <Settings/>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex w-full justify-between">
            Keyboard shortcuts <Keyboard/>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex w-full justify-between">GitHub <Link/></DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex w-full justify-between">Import Bookmarks <Import/></DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onPointerDown={logout} variant="destructive" className="flex w-full justify-between">
          Log out <LogOut/>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
     );
}
 
export default SidebarDropMenu;