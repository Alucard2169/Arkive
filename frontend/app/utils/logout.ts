import { redirect } from "next/navigation";

export async function logout(){
    try{
        const res = await fetch('/api/auth/logout',{
            method: 'POST',
        });
        if(!res.ok){
            console.error("logout Failed", res);
            return false;
        }
    }
    catch(error){
        console.error(error)
        return false;
    }
    redirect('/login')
}