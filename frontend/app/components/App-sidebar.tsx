
import {
  Sidebar,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem
} from "@/components/ui/sidebar"


import SidebarTop from "./SidebarTop"
import SidebarDropMenu from "./SidebarDropMenu"


export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
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
