import Link from "next/link"
import pokeball from "@/public/pokeball.png"
import Image from "next/image"

export default function Navbar() {

    const links = [
        {url: '/pokedex', slug: 'Pokédex'},
        {url: '/teams', slug: 'Teams'},
        {url: '/teams/create', slug: 'Create team'},
    ]

    return (
    <header>
        <nav className="font-semibold text-sm py-8 border-b-2 sm:text-lg">
            <div className="flex justify-center gap-8 sm:justify-between">
                <Link href="/" className="flex items-center gap-[2px] hover:opacity-50 transition-opacity duration-300">
                    <h1 className="hidden sm:block">Pokéteams</h1>
                    <Image src={pokeball} alt="pokeball" width={25} height={25} />
                </Link>
                <ul className="flex gap-8">
                    { links.map(link => <li key={link.slug}><Link href={link.url} className="hover:opacity-50 transition-opacity duration-300" >{ link.slug }</Link></li>) }
                </ul>
            </div>
        </nav>
    </header>
    )
}