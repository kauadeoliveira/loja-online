import { MyContext } from "@/context"
import { ContextType } from "@/types/context"
import { useContext, useEffect } from "react"
import { HiOutlineX } from "react-icons/hi";
import SearchBar from "./SearchBar";


export default function Search() {
    const { openSearch, handleOpenSearch }:Partial<ContextType>  = useContext(MyContext)

    useEffect(() => console.log(openSearch), [openSearch])

    return (
        <div className={
            `absolute top-0 w-full h-screen left-0 backdrop-blur-lg backdrop-blur-sm flex-col transition-transform duration-500
            ${openSearch ? 'transform-none' : 'translate-y-[-100vh]'}
            `
        }>
            <div className="w-full h-1/3 bg-white p-2">
                <div className="flex justify-end p-5">
                    <button onClick={handleOpenSearch}>
                        <HiOutlineX />
                    </button>
                </div>
                <div className="flex">
                    <SearchBar />
                </div>
            </div>
        </div>
    )
}