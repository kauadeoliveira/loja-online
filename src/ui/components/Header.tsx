import { HiOutlineShoppingBag, HiOutlineHeart, HiOutlineMenuAlt4 } from "react-icons/hi";
import Image from "next/image";
import Logo from "./Logo";
import { useState, useEffect } from "react"
import Menu from "./Menu";

export default function Header() {
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const handleOpenMenu = () => setOpenMenu(!openMenu);

    useEffect(() => console.log(openMenu), [openMenu])
    return(
        <div className="bg-slate-50 text-slate-800 ">
            <header className="p-2 w-full z-10 ">
                <nav className="flex justify-between">
                    <button onClick={handleOpenMenu} className="lg:hidden">
                        <HiOutlineMenuAlt4 />
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