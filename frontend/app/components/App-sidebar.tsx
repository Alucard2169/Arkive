
import {
  Sidebar,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem
} from "@/components/ui/sidebar"


import SidebarTop from "./SidebarTop"
import SidebarDropMenu from "./SidebarDropMenu"
import Image from "next/image"


export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
       <SidebarHeader>
        <div className="flex items-center p-2">
          <Image src="/static/logo.svg" width={40} height={40} alt="homepage logo"/> 
          <h1 className="ml-2 font-bold">Arkive</h1>
        </div>
      </SidebarHeader>
      <SidebarTop/>
      <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem >
            <SidebarDropMenu/>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
    </Sidebar>
  )
}
