import { SocialMediaType } from "@/types/socialMedia";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaGithub, FaGoogle, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiChevronUp } from "react-icons/hi";


export default function Footer() {
    const socials: SocialMediaType[] = [
        {icon: <FaLinkedin />, url: "linkedin.com/in/kauadeoliveira/"},
        {icon: <FaGithub />, url: "github.com/kauadeoliveira"},
        {icon: <FaGoogle />, url: "mailto:kauaoliveira.dev@gmail.com"},
        {icon: <FaTwitter />, url: "twitter.com/kauaolv_"},
    ]

    const [scrollToTop, setScrollToTop] = useState(false);

    useEffect(() => {
        if(scrollToTop){
            window.scrollTo({ 
                top:0,
                behavior: "smooth"
            })
            setScrollToTop(false)
        }
    }, [scrollToTop])

    const handleScrollToTop = () => setScrollToTop(true);

    return(
        <footer className="flex flex-col bg-black text-white">
            <button className="flex w-full font-josefin items-center justify-center py-2" onClick={handleScrollToTop}>
                <i className="text-xl"><HiChevronUp /></i>
                <p>Voltar ao topo</p>
            </button>
            <div className="py-5 px-14">
                <ul className="flex justify-center gap-8">
                    {socials.map((social, index) => (
                        <li key={index}>
                            <Link href={social.url} target="_blank">
                                <i className="text-2xl md:text-3xl">
                                    {social.icon}
                                </i>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    )
}