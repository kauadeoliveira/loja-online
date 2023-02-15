import { useRef } from "react";
import { HiSearch, HiXCircle } from "react-icons/hi";

export default function SearchBar() {
    const searchInputRef = useRef(null);

    const resetInput = () => searchInputRef.current.value = ''
    return(
        <div className="flex items-center  w-full rounded-md p-1 text-2xl">
            <button className="px-2 opacity-50">
                <HiSearch />
            </button>
            <input
             ref={searchInputRef}
             type="text"
             placeholder="Busca"
             className="
                w-full bg-transparent outline-none placeholder:text-black placeholder:opacity-50"
            />
            <button className="opacity-50" onClick={resetInput}>
                <HiXCircle />
            </button>
        </div>
    )
}