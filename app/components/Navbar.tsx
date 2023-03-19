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
        <nav>
            <div>
                <ul>
                    { links.map(link => <li key={link.slug}><Link href={link.url}>{ link.slug }</Link></li>) }
                </ul>
            </div>
        </nav>
    </header>
    )
}