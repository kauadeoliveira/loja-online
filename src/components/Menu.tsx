import { SocialMediaType } from "@/types/socialMedia";
import Link from "next/link";

import { FaLinkedin, FaGithub, FaGoogle, FaTwitter, FaInstagram } from "react-icons/fa";

type MenuType = {
    open?: boolean;
}

export default function Menu({ open }: MenuType) {
    const socials: SocialMediaType[] = [
        {icon: <FaLinkedin />, url: "linkedin.com/in/kauadeoliveira/"},
        {icon: <FaGithub />, url: "github.com/kauadeoliveira"},
        {icon: <FaGoogle />, url: "mailto:kauaoliveira.dev@gmail.com"},
        {icon: <FaTwitter />, url: "twitter.com/kauaolv_"},
    ]


    return(
        <div className={`${open ? 'max-h-[115vh]' : 'max-h-0'} transition-all duration-500`}>
            <nav>
                <ul className="flex flex-col py-2 font-roboto">
                    <li className="h-[30vh]">
                        <Link href="#" className="relative flex justify-center h-full items-center px-4">
                            <span className="
                                text-base text-slate-800 flex justify-center before:content-[''] before:block before:h-px
                                before:bg-stone-400 before:absolute before:w-11/12 before:bottom-0 font-bold md:text-2xl
                                after:content-[''] after:block after:h-px after:bg-stone-400 after:absolute after:w-11/12 after:top-0"
                            >
                                Masculino
                            </span>
                        </Link>
                    </li>
                    <li className="h-[30vh]">
                        <Link href="#" className="relative flex justify-center h-full items-center px-4">
                            <span className="
                                text-base text-slate-800 flex justify-center before:content-[''] before:block before:h-px
                                before:bg-stone-400 before:absolute before:w-11/12 before:bottom-0 font-bold md:text-2xl"
                            >
                                Feminino
                            </span>
                        </Link>
                    </li>
                    <li className="h-[30vh]">
                        <Link href="#" className="relative flex justify-center h-full items-center px-4">
                            <span className="
                                text-base text-slate-800 flex justify-center before:content-[''] before:block before:h-px
                                before:bg-stone-400 before:absolute before:w-11/12 before:bottom-0 font-bold md:text-2xl"
                            >
                                Infantil
                            </span>
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="text-center h-[10vh] mt-9">
                <ul className="flex space-x-3 justify-center text-xl">
                    {socials.map((social, index) => (
                        <li key={index}>
                            <Link href={social.url} className="text-slate-400 hover:text-slate-800 ease-in duration-100" target="_blank">
                                <i>
                                    {social.icon}
                                </i>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}