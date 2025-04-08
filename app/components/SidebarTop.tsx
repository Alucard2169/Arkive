import {
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem
} from "@/components/ui/sidebar";
import { Bookmark, Code, LayoutDashboard, NotebookTabs, Rss, Star, Video } from "lucide-react";



// Menu items.
const items = [
    {
      title: "Dashboard",
      url: "#",
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
          <SidebarGroupLabel className="text-lg font-bold">Arkive</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    );
}
 
export default SidebarTop;