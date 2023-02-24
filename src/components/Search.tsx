import { MyContext } from "@/context"
import { ContextType } from "@/types/context"
import { useContext, useEffect } from "react"
import { HiOutlineX } from "react-icons/hi";
import SearchBar from "./SearchBar";


export default function Search() {
    const { openSearch, handleOpenSearch }:Partial<ContextType>  = useContext(MyContext)

    return (
        <div className={
            `fixed top-0 left-0 w-full h-screen flex flex-col backdrop-blur-sm transition-transform duration-500
            ${openSearch ? 'transform-none' : 'translate-y-[-100vh]'}
            `
        }>
            <div className="w-full bg-white px-5 py-3 h-screen md:h-1/3">
                <div className="flex items-center justify-end">
                    <button className="opacity-60 text-2xl" onClick={handleOpenSearch}>
                        <HiOutlineX />
                    </button>
                </div>
                <div className="p-5">
                    <SearchBar />
                </div>
            </div>
        </div>
    )
}