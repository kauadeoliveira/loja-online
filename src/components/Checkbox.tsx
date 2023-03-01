import { MouseEvent } from "react";

import { HiCheck } from "react-icons/hi"

type CheckboxType = {
    title: string;
    id: string;
    onClick?: (event: MouseEvent<HTMLInputElement>) => void| undefined;
}

export default function Checkbox({ title, id, onClick }: CheckboxType) {
    return(
        <label htmlFor={id} className="cursor-pointer relative capitalize flex items-center gap-1">
            <input type="checkbox" id={id} className="mycheckbox appearance-none h-4 w-4 border-2 border-black rounded-sm"/>
            <HiCheck className="hiCheck text-lg h-4 w-4 absolute left-0  opacity-0 text-white"/>
            {title}
        </label>
    )
}