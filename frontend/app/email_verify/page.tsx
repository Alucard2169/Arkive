import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Page = () => {
    return ( 
        <main className="h-full flex justify-center items-center">
            <section className="flex flex-col gap-8 w-2/5">
                <h1 className="font-bold text-2xl">Password Reset</h1>
                <p className="text-sm">Please enter your registered email below</p>
                <div className="flex w-full items-center space-x-2">
                    <Input type="email" placeholder="Email" />
                    <Button variant="ghost" type="submit">Verify</Button>
               </div>
               <p className="font-light italic">If this email is linked to an account, we’ve sent you a recovery link.</p>
            </section>
        </main>
     );
}
 
export default Page;
