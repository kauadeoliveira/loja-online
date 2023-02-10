import Link from "next/link";

import { FaLinkedin, FaGithub, FaGoogle } from "react-icons/fa";

type MenuType = {
    open?: boolean;
}

export default function Menu({ open }: MenuType) {
    const socialMediaIcons:React.ReactElement<any, any>[] = [
        <FaLinkedin key="linkedin"/>, <FaGithub key="github"/>, <FaGoogle key="google"/>
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
                    {socialMediaIcons.map(icon => (
                        <li key={icon.key}>
                            <Link href="#" className="text-slate-400 hover:text-slate-800 ease-in duration-100">
                                <i>
                                    {icon}
                                </i>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}