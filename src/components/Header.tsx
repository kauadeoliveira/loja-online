import { HiOutlineShoppingBag, HiOutlineHeart, HiX, HiMenu, HiSearch } from "react-icons/hi";
import Logo from "./Logo";
import { useState, useEffect, useContext } from "react"
import Menu from "./Menu";
import { MyContext } from "@/context";
import { ContextType } from "@/types/context";
import Link from "next/link";
import Search from "./Search";
import { CategoryType } from "@/types/category";


export default function Header() {
    const { handleOpenSearch, handleOpenMenu, openMenu }: Partial<ContextType> = useContext(MyContext);

    const categories: CategoryType[] = [
        {name: 'Masculino', route: '/category/masculino'},
        {name: 'Feminino', route: '/category/feminino'},
        {name: 'Infantil', route: '/category/infantil'},
        {name: 'Contato', route: '#'},
    ]

    return(
        <header className="
            bg-white flex w-full py-2 px-5 items-center justify-between border-b
            fixed top-0 z-20"
        >
            {/* Menu Button and Logo */}
            <div className="flex gap-3">
                <button className="text-2xl md:hidden" onClick={handleOpenMenu}>
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
                                {category.name}
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
                        <button onClick={handleOpenSearch}>
                            <HiSearch />
                        </button>
                    </li>
                </ul>
            </nav>
            <Search />
            <Menu />
        </header>
    )
}