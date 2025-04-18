import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyToken } from "./app/utils/verify";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("access_token");
  const {pathname} = request.nextUrl;


  if (!token) {
    if(pathname.startsWith('/dashboard') || pathname.startsWith('/profile')){
      return NextResponse.redirect(new URL('/login', request.url));
    }
    return NextResponse.next();
  
  }

  try {
    const isValid = await verifyToken(token.value);
    
    if (!isValid) {
      console.log('Token verification failed, redirecting to login');
      return NextResponse.redirect(new URL('/login', request.url));
    }

    if(pathname === '/') return NextResponse.redirect(new URL('/dashboard', request.url))

    return NextResponse.next();

  } catch (error) {
    console.error('Error during token verification:', error);
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

export const config = {
  matcher: ['/','/dashboard/:path*', '/profile/:path*'],
}


