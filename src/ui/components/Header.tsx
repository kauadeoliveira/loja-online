import Menu from "./Menu";
import { HiOutlineShoppingBag, HiOutlineHeart } from "react-icons/hi";
import Image from "next/image";
import Logo from "./Logo";


export default function Header() {
    return(
        <header className="p-2 bg-slate-50 text-slate-800">
            <nav className="flex justify-between">
                <Menu />
                <Logo />
                <ul className="flex space-x-2 items-center">
                    <li><HiOutlineHeart /></li>
                    <li><HiOutlineShoppingBag /></li>
                </ul>
            </nav>
        </header>
    )
}