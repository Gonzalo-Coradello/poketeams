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
            <form>
                <input type="text" value={search} onChange={handleChange} />
                <button onClick={handleClick}>x</button>
            </form>
        </div>
    )
}