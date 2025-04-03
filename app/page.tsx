import Link from "next/link";

export default function Home() {
  return (
    <main className="h-full flex flex-col gap-16 items-center justify-center">
      <section className="flex items-end gap-6">
      <h1 className="text-6xl underline decoration-red-500 decoration-wavy decoration-2 font-bold">Arkive</h1>
      <p className="text-lg">A modern archive for all your curated knowledge. (it’s open source)</p>
      </section>
      <button
        className="px-3 py-2 font-bold rounded-lg transition-colors hover:scale-105 transition-transform"
        style={{backgroundColor: "var(--compbg)", color: "var(--text)"}}
      ><Link href="/auth">Join to get started</Link></button>
    </main>
  );
}
