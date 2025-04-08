import { PasswordReset } from "../components/PasswordReset";

const Page = () => {
    return ( 
        <main className="h-full flex flex-col justify-center items-center">
            <h1 className="font-black text-2xl">Password Reset</h1>
            <PasswordReset/>
            </main>
     );
}
 
export default Page;