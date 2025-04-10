import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "../components/App-sidebar"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <SidebarProvider>
        <AppSidebar />
        <main className="border w-full">
          <section className="flex items-center justify-between w-full pt-2 pr-2">
          <SidebarTrigger />
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input type="text" placeholder="Search" required/>
            <Button type="submit"><Search/></Button>
          </div>
          </section>
          {children}
        </main>
      </SidebarProvider>
    )
  }