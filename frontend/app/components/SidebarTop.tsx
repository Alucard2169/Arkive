import {
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuBadge,
    SidebarMenuButton,
    SidebarMenuItem
} from "@/components/ui/sidebar";
import { Bookmark, Code, LayoutDashboard, NotebookTabs, Rss, Star, Video } from "lucide-react";



// Menu items.
const items = [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Bookmarks",
      url: "#",
      icon: Bookmark,
    },
    {
      title: "Github Stars",
      url: "#",
      icon: Star,
    },
    {
      title: "YouTube",
      url: "#",
      icon: Video,
    },
    {
      title: "Notes",
      url: "#",
      icon: NotebookTabs,
    },
    {
      title: "RSS",
      url: "#",
      icon: Rss
    },
    {
      title: "Stack Overflow",
      url: "#",
      icon: Code,
    }
  ]
  
  


const SidebarTop = () => {
    return (  
        <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="p-1 flex flex-col gap-4">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                  <SidebarMenuBadge>10</SidebarMenuBadge>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    );
}
 
export default SidebarTop;