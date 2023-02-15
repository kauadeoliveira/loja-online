import { MyContext } from "@/context";
import { ContextType } from "@/types/context";
import { SocialMediaType } from "@/types/socialMedia";
import Link from "next/link";
import { useContext } from "react";

import { FaLinkedin, FaGithub, FaGoogle, FaTwitter, FaInstagram } from "react-icons/fa";

type MenuType = {
    open?: boolean;

}

export default function Menu() {
    const { handleOpenMenu, openMenu }: Partial<ContextType> = useContext(MyContext);

    const socials: SocialMediaType[] = [
        {icon: <FaLinkedin />, url: "linkedin.com/in/kauadeoliveira/"},
        {icon: <FaGithub />, url: "github.com/kauadeoliveira"},
        {icon: <FaGoogle />, url: "mailto:kauaoliveira.dev@gmail.com"},
        {icon: <FaTwitter />, url: "twitter.com/kauaolv_"},
    ]

    return(
        <nav className={`
        bg-red-300 fixed top-0 left-0 h-screen w-full transition-transform duration-1000 md:hidden
        ${openMenu ? 'translate-y-[none]' : 'translate-y-[-100vh]'}
        `}
        >
            <ul>
                <button onClick={handleOpenMenu}>x</button>
                <li>a</li>
                <li>b</li>
                <li>c</li>
            </ul>
        </nav>
    )
}