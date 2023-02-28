import { forwardRef, LegacyRef, MouseEvent, MouseEventHandler } from 'react';

interface SizeType {
    size: string;
    id: string;
    onClick?: (event: MouseEvent<HTMLInputElement>) => void| undefined;
}

export default function Size({ size, id, onClick }: SizeType) {
    return(
        <label
         htmlFor={id}
         className="
           cursor-pointer relative hover:bg-slate-200 transition-colors
           duration-300 h-7 w-9 rounded-md"
        >
           <input
               type="checkbox"
               id={id}
               onClick={onClick}
               className="appearance-none h-full w-full rounded-md border-2 checked:border-black"
           />
           <span className="flex h-full w-full absolute top-0 justify-center items-center">
               {size}
           </span>
       </label>
    )
}
