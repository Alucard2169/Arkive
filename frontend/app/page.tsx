import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Home() {
  return (
    <main className="h-full flex flex-col gap-16 items-center justify-center">
      <section className="flex items-end gap-6">
        <h1 className="text-6xl underline decoration-red-500 decoration-wavy decoration-2 font-bold">
          Arkive
        </h1>
        <p className="text-lg">
          A modern archive for all your curated knowledge. (it’s open source)
        </p>
      </section>
      <Button
        asChild
        variant="ghost"
        className="px-3 text-md py-2 font-bold rounded-lg hover:scale-105 transition-transform"
      >
        <Link href="/signup">Join to get started</Link>
      </Button>
    </main>
  );
}