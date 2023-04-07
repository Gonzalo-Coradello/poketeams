import Link from "next/link"
import pokeball from "@/public/pokeball.png"
import Image from "next/image"

export default function Navbar() {

    const links = [
        {url: '/pokedex', slug: 'Pokedex'},
        {url: '/teams', slug: 'Teams'},
        {url: '/teams/create', slug: 'Create team'},
    ]

    return (
    <header>
        <nav className="py-8 border-b-2">
            <div className="flex justify-center gap-8 sm:justify-between">
                <div className="flex">
                    <h1 className="hidden sm:block">Pokéteams</h1>
                    <Image src={pokeball} alt="pokeball" width={25} height={25} />
                </div>
                <ul className="flex gap-8">
                    { links.map(link => <li key={link.slug}><Link href={link.url}>{ link.slug }</Link></li>) }
                </ul>
            </div>
        </nav>
    </header>
    )
}