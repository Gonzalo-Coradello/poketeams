'use client'

type Props = {
    handleSelect: any,
    type: string
}

export default function Filter({ handleSelect, type }: Props) {

    const types: string[] = ['normal', 'fire', 'water', 'grass', 'electric', 'ice', 'fighting', 'poison', 'ground', 'flying', 'psychic', 'bug', 'rock', 'ghost', 'dark', 'dragon', 'steel', 'fairy']

    return (
        <form>
            <label htmlFor="type-select">Filter by type</label>
            <select name="types" id="type-select" value={type} onChange={handleSelect} >
                <option value="">All types</option>

                { types.map(type => <option key={type} value={type} >{type}</option> ) }
            </select>
        </form>
    )
}