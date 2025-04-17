import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('access_token')?.value
  const { pathname } = request.nextUrl

  if (['/login', '/signup', '/'].includes(pathname)) {
    if (token) {
      return NextResponse.redirect(new URL('/dashboard', request.url))
    }
    return NextResponse.next()
  }
  
  if (pathname.startsWith('/dashboard') || pathname.startsWith('/profile')) {
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
    
    try {
      const url = new URL('/api/auth/verify', request.url)
      const authCheck = await fetch(url.toString(), {
        headers: { 
          Cookie: `access_token=${token}`,
          'Content-Type': 'application/json'
        },
        credentials: 'include'
      })
      
      if (!authCheck.ok) {
        throw new Error('Invalid token')
      }
      
      // Token is valid, proceed
      return NextResponse.next()
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error'
      console.error('Token verification failed:', errorMessage)
      const response = NextResponse.redirect(new URL('/login', request.url))
      response.cookies.delete('access_token')
      return response
    }
  }
  
  return NextResponse.next()
}

// Define which paths this middleware applies to
export const config = {
  matcher: ['/dashboard/:path*', '/profile/:path*', '/login', '/signup', '/']
}