import { useEffect, useRef, useState } from "react";
import { HiSearch, HiXCircle } from "react-icons/hi";

export default function SearchBar() {
    const searchInputRef = useRef<HTMLInputElement>(null);
    const [hasInputValue, setHasInputValue] = useState<boolean>();

    const resetInput = () => {
        if(searchInputRef.current){
            searchInputRef.current.value = '';
            setHasInputValue(false);
        }
    }
    
    const handleInputValue = () => searchInputRef.current?.value != '' ? setHasInputValue(true) : setHasInputValue(false);


    return(
        <div className="flex items-center w-full p-1 text-2xl">
            <button className="px-2 opacity-50">
                <HiSearch />
            </button>
            <input
             ref={searchInputRef}
             type="text"
             placeholder="Busca"
             onChange={handleInputValue}
             className="
                w-full bg-transparent outline-none placeholder:text-black placeholder:opacity-50"
            />
            <button className={`opacity-50 text-xl ${hasInputValue ? 'block' : 'hidden'}`} onClick={resetInput}>
                <HiXCircle />
            </button>
        </div>
    )
}