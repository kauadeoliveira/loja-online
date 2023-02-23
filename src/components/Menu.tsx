import { MyContext } from "@/context";
import { CategoryType } from "@/types/category";
import { ContextType } from "@/types/context";
import { SocialMediaType } from "@/types/socialMedia";
import Link from "next/link";
import { useContext } from "react";

import { HiOutlineShoppingBag, HiOutlineHeart, HiOutlineX, HiOutlineMail } from "react-icons/hi";



type MenuType = {
    open?: boolean;

}

export default function Menu() {
    const { handleOpenMenu, openMenu }: Partial<ContextType> = useContext(MyContext);

    const categories: CategoryType[] = [
        {name: 'Masculino', route: '/category/masculino'},
        {name: 'Feminino', route: '#'},
        {name: 'Infantil', route: '#'},
        {name: 'Carrinho', route: '#'},
        {name: 'Lista de desejos', route: '#'},
        {name: 'Mande um email', route: '#'},
    ]

    return(
        <nav className={`
         bg-white absolute top-0 left-0 h-screen w-full transition-transform duration-500 
         md:hidden ${openMenu ? 'translate-y-[none]' : 'translate-y-[-100vh]'}`}
        >
            <div className="flex items-center px-5 py-3 justify-end">
                <button className="opacity-60 text-2xl" onClick={handleOpenMenu}>
                    <i>
                        <HiOutlineX />
                    </i>
                </button>
            </div>
            <div className="px-5 text-2xl font-roboto font-bold">
                <ul className="flex flex-col gap-4 uppercase">
                    {
                        categories.map((category, index) => (
                            <li key={index}>
                                <Link href={category.route}>
                                    {category.name}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </nav>
    )
}