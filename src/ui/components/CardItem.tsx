import { formatToReal } from "@/utils/formatToReal";
import Image from "next/image";
import Link from "next/link";
import { format } from "path";
import { HiOutlineHeart } from "react-icons/hi";

interface CardItemProps{
    img: string;
    title: string;
    price: number;
}

export default function CardItem({ img, title, price}: CardItemProps) {
    return(
        <div 
         className="block bg-white w-80 rounded-xl shadow-inner drop-shadow-lg transition-transform duration-300 hover:scale-[1.03]">
            <div>
                <Link href="#"className="block p-3">
                    <Image src={img} width={320} height={384} alt={`${title} image`}/>
                </Link>
            </div>

            <div>
                <div className="flex justify-between items-center">
                    <Link href="#" className="px-3 w-full font-black text-xl">
                        <h3>{title}</h3>
                    </Link>
                    <button onClick={() => console.log('clicou no fav')} className="px-3 h-3">
                        <i>
                            <HiOutlineHeart />
                        </i>
                    </button>
                </div>
                <Link href="#" className="block px-3 pb-3 font-bold">
                    <p>{formatToReal(price)}</p>
                </Link>
            </div>
        </div>
    )
}