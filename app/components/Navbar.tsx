import Link from "next/link"

export default function Navbar() {

    const links = [
        {url: '/', slug: 'Home'},
        {url: '/pokedex', slug: 'Pokedex'},
        {url: '/teams', slug: 'Teams'},
        {url: '/teams/create', slug: 'Create team'},
    ]

    return (
    <header>
        <nav className="py-8 border-b-2">
            <div className="flex justify-between">
                <h1>Poketeams</h1>
                <ul className="flex gap-8">
                    { links.map(link => <li key={link.slug}><Link href={link.url}>{ link.slug }</Link></li>) }
                </ul>
            </div>
        </nav>
    </header>
    )
}