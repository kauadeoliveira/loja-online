import { HiOutlineShoppingBag, HiOutlineHeart, HiX, HiMenu } from "react-icons/hi";
import Logo from "./Logo";
import { useState, useEffect, useContext } from "react"
import Menu from "./Menu";
import { MyContext } from "@/context";
import { ContextType } from "@/types/context";

export default function Header() {
    const { handleOpenMenu, openMenu }: Partial<ContextType> = useContext(MyContext);

    return(
        <header className={`bg-slate-50 text-black z-50 w-full top-0 fixed ${openMenu ? 'h-full overflow-auto' : 'overflow-hidden'}`}>
            <div className="py-3 px-3 md:px-6 w-full z-10">
                <nav className="flex justify-between">
                    <button onClick={handleOpenMenu} className="md:hidden">
                        <i className="text-xl">
                            {openMenu ? <HiX /> : <HiMenu />}
                        </i>
                    </button>
                    <div className="flex gap-3">
                        <button onClick={handleOpenMenu} className="hidden md:block">
                            <i className="text-3xl">
                                {openMenu ? <HiX /> : <HiMenu />}
                            </i>
                        </button>
                        <Logo />
                    </div>
                    <ul className="flex space-x-2 items-center">
                        <li>
                            <i className="text-xl md:text-2xl">
                                <HiOutlineHeart />
                            </i>
                        </li>
                        <li>
                            <i className="text-xl md:text-2xl">
                                <HiOutlineShoppingBag />
                            </i>
                        </li>
                    </ul>
                </nav>
            </div>
            <Menu open={openMenu} />
        </header>
    )
}
