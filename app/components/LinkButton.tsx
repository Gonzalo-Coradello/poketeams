import Link from "next/link";

export default function LinkButton({ href, children }: { href: string, children: React.ReactNode }) {
  return <Link className="w-fit mx-auto px-4 py-2 border rounded-md hover:bg-white hover:text-black transition-all duration-300" href={href}>{children}</Link>
}
