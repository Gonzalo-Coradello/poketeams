'use client'

type Props = {
    search: string,
    setSearch: Function,
    handleChange: any
}

export default function Search({ search, setSearch, handleChange }: Props) {

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        setSearch('')
        handleChange(e)
    }

    return (
        <div>
            <form className="relative w-fit mx-auto">
                <input className="rounded" type="text" value={search} onChange={handleChange} />
                <button className="absolute top-0 bottom-0 right-2" onClick={handleClick}>x</button>
            </form>
        </div>
    )
}