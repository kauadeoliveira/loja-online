import { ChildrenType } from "@/types/children";
import Link from "next/link";

type ButtonType = {
    mode: 'dark' | 'light' | 'transparent';
    children: ChildrenType
}

export default function Button({ mode, children }: ButtonType) {
    return (
        <Link href="#" 
        className={`
        ${mode === 'dark' ? 'bg-black text-white' : (mode === 'light' ? 'bg-white text-black' : 'bg-transparent text-white')}
        inline-block py-2 px-4 rounded-md
        transition-all duration-[0.2s] ease-in font-bold
        relative overflow-hidden z-10 text-sm

        before:content-[''] before:absolute before:left-1/2 before:translate-x-[-50%]
        before:scale-y-100 before:scale-x-125 before:top-full before:w-[140%] before:h-[180%]
        before:bg-red-700 before:rounded-[50%] before:block before:transition-all
        before:duration-500 before:animate-[cubic-bezier(0.55,0,0.1,1)] before:-z-10

        after:content-[''] after:absolute after:left-[55%] after:translate-x-[-50%]
        after:scale-y-100 after:scale-x-[1.45] after:top-[180%] after:w-[160%] after:h-[190%]
        after:bg-red-700 after:rounded-[50%] after:block after:transition-all
        after:duration-500 after:animate-[cubic-bezier(0.55,0,0.1,1)] after:-z-10

        hover:text-white
        hover:before:scale-y-[1.3] hover:before:scale-x-[0.8]
        hover:before:top-[-35%] hover:before:bg-red-700 hover:before:translate-x-[-50%]
        hover:after:top-[-45%] hover:after:bg-red-700 hover:after:translate-x-[-50%]
        hover:after:scale-y-[1.3] hover:after:scale-x-[0.8]
        `}>
            {children}
        </Link>
    )
}
