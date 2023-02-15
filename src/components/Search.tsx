import { MyContext } from "@/context"
import { ContextType } from "@/types/context"
import { useContext, useEffect } from "react"
import { HiX } from "react-icons/hi";


export default function Search() {
    const { openSearch, handleOpenSearch }:Partial<ContextType>  = useContext(MyContext)

    useEffect(() => console.log(openSearch), [openSearch])

    return (
        <nav className={`
            flex w-full h-screen bg-yellow-500 fixed top-0 left-0 duration-1000 transition-transform
            ${openSearch ? 'translate-y-[none]' : 'translate-y-[-100vh]'}
        `}>
            <ul>
                <button onClick={handleOpenSearch}>x</button>
                <li>a</li>
                <li>b</li>
                <li>c</li>
            </ul>
        </nav>
    )
}