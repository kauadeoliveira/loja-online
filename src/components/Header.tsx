import { HiOutlineShoppingBag, HiOutlineHeart, HiX, HiMenu, HiSearch } from "react-icons/hi";
import Logo from "./Logo";
import { useState, useEffect, useContext } from "react"
import Menu from "./Menu";
import { MyContext } from "@/context";
import { ContextType } from "@/types/context";
import Link from "next/link";


export default function Header() {
    const { handleOpenMenu, openMenu }: Partial<ContextType> = useContext(MyContext);

    const categories = [
        {categoryName: 'Masculino', route: '#'},
        {categoryName: 'Feminino', route: '#'},
        {categoryName: 'Infantil', route: '#'},
        {categoryName: 'Contato', route: '#'},
    ]

    return(
        <header className="
         bg-white flex w-full py-2 px-5 items-center justify-between border-b
         fixed top-0 z-20 shadow-sm"
        >
            {/* Menu Button and Logo */}
            <div className="flex gap-3">
                <button className="text-2xl md:hidden">
                    <i>
                        <HiMenu />
                    </i>
                </button>
                <Logo />
            </div>

            {/* Navigation */}
            <nav className="flex justify-between text-xl items-center md:text-lg md:w-2/3 font-semibold">
                {/* Categories */}
                <ul className="hidden md:flex gap-3">
                    {categories.map((category, index) => (
                        <li key={index} className="
                            relative px-2 after:content-['']
                            after:absolute after:bg-red-700 after:h-[2px] after:w-0
                            after:left-0 after:-bottom-2 after:duration-300 hover:after:w-full
                            hover:text-black"
                        >
                            <Link href={category.route}>
                                {category.categoryName}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Others Buttons */}
                <ul className="flex gap-3">
                    <li>
                        <Link href="#">
                            <HiOutlineShoppingBag />
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <HiOutlineHeart />
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <HiSearch />
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}







// relative px-2 after:content-['']
// after:absolute after:bg-red-700 after:h-[2px] after:w-0
// after:left-0 after:-bottom-2 after:duration-300 hover:after:w-full
// hover:text-black