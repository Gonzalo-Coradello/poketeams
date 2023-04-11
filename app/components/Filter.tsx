'use client'

type Props = {
    handleSelect: any,
    type: string
}

export default function Filter({ handleSelect, type }: Props) {

    const types: string[] = ['normal', 'fire', 'water', 'grass', 'electric', 'ice', 'fighting', 'poison', 'ground', 'flying', 'psychic', 'bug', 'rock', 'ghost', 'dark', 'dragon', 'steel', 'fairy']

    return (
        <form>
            <select name="types" id="type-select" value={type} onChange={handleSelect} className="font-extralight text-sm rounded py-1 px-3 bg-[#2b2a33] text-white" >
                <option className="font-extralight text-sm" value="">All types</option>

                { types.map(type => <option key={type} value={type} className="font-extralight text-sm" >{type}</option> ) }
            </select>
        </form>
    )
}