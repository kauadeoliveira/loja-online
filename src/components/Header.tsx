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
        <header className={`bg-slate-50 text-slate-800 z-50 w-full top-0 fixed ${openMenu ? 'h-full overflow-auto' : 'overflow-hidden'}`}>
            <div className="py-3 px-3 md:px-6 w-full z-10">
                <nav className="flex justify-between">
                    <button onClick={handleOpenMenu} className="md:hidden">
                        <i className="text-xl">
                            {openMenu ? <HiX /> : <HiMenu />}
                        </i>
                    </button>
                    <div className="flex items-center ">
                    <Logo />
                    <ul className="hidden md:flex gap-3 pl-10 font-semibold text-base">
                        {
                            categories.map((category, index) => (
                                <li key={index}>
                                    <Link href={category.route} className="
                                     relative px-2 after:content-['']
                                     after:absolute after:bg-red-700 after:h-[2px] after:w-0
                                     after:left-0 after:-bottom-2 after:duration-300 hover:after:w-full
                                    hover:text-black
                                    "
                                    >
                                        {category.categoryName}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                    </div>

                    <ul className="flex items-center gap-3">
                        <li>
                            <Link href="#">
                                <i className="text-xl md:text-2xl">
                                    <HiOutlineHeart />
                                </i>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <i className="text-xl md:text-2xl">
                                    <HiOutlineShoppingBag />
                                </i>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <i className="text-xl md:text-2xl">
                                    <HiSearch />
                                </i>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <Menu open={openMenu} />
        </header>
    )
}
