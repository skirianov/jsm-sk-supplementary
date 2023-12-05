import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <header className="bg-black text-white py-2 px-12 hover:text-pink-500">
        <Link href={`/jobs`}>
          👈 go back to jobs
        </Link>
      </header>
      {children}
    </main>
  )
}
