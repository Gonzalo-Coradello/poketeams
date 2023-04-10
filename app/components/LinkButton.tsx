import Link from "next/link";

type Props = {
  href: string,
  color?: string,
  children: React.ReactNode
}

export default function LinkButton({ href, color = "white", children }: Props) {
  return <Link className={`text-${color} w-fit mx-auto px-4 py-2 border border-${color} rounded-md hover:bg-${color} hover:text-${color === "white" ? "black" : "white"} transition-all duration-300`} href={href}>{children}</Link>
}
