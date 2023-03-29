import { MouseEventHandler } from "react";

type Props = {
    children: React.ReactNode,
    handleClick?: MouseEventHandler,
    disabled?: true
}

export default function Button({ children, handleClick, disabled }: Props) {
    return <button onClick={handleClick} className={ `w-fit mx-auto px-4 py-2 border rounded-md transition-all duration-300 ${ disabled ? 'cursor-default opacity-50' : 'hover:bg-white hover:text-black' } ` } >
        { children }
    </button>
}