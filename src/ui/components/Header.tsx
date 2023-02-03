import { HiOutlineShoppingBag, HiOutlineHeart, HiX, HiOutlineMenu } from "react-icons/hi";
import Logo from "./Logo";
import { useState, useEffect, useContext } from "react"
import Menu from "./Menu";
import { MyContext } from "@/context";
import { ContextType } from "@/types/context";

export default function Header() {
    const { handleOpenMenu, openMenu }: Partial<ContextType> = useContext(MyContext);

    return(
        <div className={`bg-slate-50 text-slate-800 z-50 w-[100%] top-0 fixed ${openMenu ? 'h-[100%] overflow-auto' : 'overflow-hidden'}`}>
            <header className="p-2 w-full z-10">
                <nav className="flex justify-between">
                    <button onClick={handleOpenMenu} className="lg:hidden">
                        <i>
                            {openMenu ? <HiX /> : <HiOutlineMenu />}
                        </i>
                    </button>
                    <Logo />
                    <ul className="flex space-x-2 items-center">
                        <li>
                            <HiOutlineHeart />
                        </li>
                        <li>
                            <HiOutlineShoppingBag />
                        </li>
                    </ul>
                </nav>
            </header>
            <Menu open={openMenu} />
        </div>
    )
}
