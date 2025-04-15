import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('access_token')?.value
  const { pathname } = request.nextUrl

  // Public routes
  if (['/login', '/signup'].includes(pathname)) {
    if (token) {
      return NextResponse.redirect(new URL('/dashboard', request.url))
    }
    return NextResponse.next()
  }

  // Protected routes
  if (pathname.startsWith('/dashboard')) {
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url))
    }

    try {
      const authCheck = await fetch('/api/auth/verify', {
        headers: { Cookie: `access_token=${token}` }
      })
      
      if (!authCheck.ok) {
        throw new Error('Invalid token')
      }
    } catch (error) {
      const response = NextResponse.redirect(new URL('/login', request.url))
      response.cookies.delete('access_token')
      return response
    }
  }

  return NextResponse.next()
}