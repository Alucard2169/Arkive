import type { Metadata } from 'next'
import './globals.css'
import ThemeToggle from './components/ThemeToggle'
 
export const metadata: Metadata = {
  title: 'Arkive - A modern archive',
  description: 'Arkive is a project that aims to keep all your knowledge in one place (bookmarks, notes, etc.)',
  viewport: 'width=device-width, initial-scale=1',
}
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="transition-colors relative" style={{backgroundColor: "var(--bg)", color: "var(--text)"}}>
        <main className='h-full w-full'>{children}</main>
        <footer className='fixed bottom-0'>
          <aside className='bg-[#121212] rounded-tr-md w-8 h-8 flex justify-center items-center'>
          <ThemeToggle/>
          </aside>
        </footer>
      </body>
    </html>
  )
}