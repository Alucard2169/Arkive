import type { Metadata } from 'next'
import './globals.css'
import { Toaster } from "@/components/ui/sonner"
import { ThemeProvider } from './components/Theme-provider'
import { ModeToggle } from './components/ThemeToggle'


export const metadata: Metadata = {
  title: 'Arkive - A modern archive',
  description: 'Arkive is a project that aims to keep all your knowledge in one place (bookmarks, notes, etc.)',
  
}
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="transition-colors relative">
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <main className='h-full w-full'>{children}</main>
        <footer className='fixed bottom-2 right-2'>
          <aside className='rounded-tr-md w-8 h-8 flex justify-center items-center'>
          <ModeToggle/>
          </aside>
        </footer>
        <Toaster/>
        </ThemeProvider>
      </body>
    </html>
  )
}