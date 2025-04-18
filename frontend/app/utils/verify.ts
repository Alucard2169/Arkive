// lib/auth.ts
export async function verifyToken(token: string | undefined) {
  if (!token) {
    return false;
  }

  const verifyURL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://backend:8000";
  
  try {
    const response = await fetch(`${verifyURL}/api/auth/verify`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    
    return response.ok;
  } catch (error) {
    console.error('Error during token verification:', error);
    return false;
  }
}