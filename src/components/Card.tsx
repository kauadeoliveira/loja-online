import { CardType } from "@/types/card";
import { formatToReal } from "@/utils/formatToReal";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineHeart } from "react-icons/hi";


export default function Card({ img, name, price, type }: CardType) {
    return(
        <div 
         className="
            h-full bg-white rounded-xl shadow-inner drop-shadow-lg
            transition-transform duration-300 hover:scale-[1.02]
         ">
            <div>
                <Link href="#"className="flex justify-center p-3">
                    <Image priority src={img} width={288} height={288} alt={`${name} image`}/>
                </Link>
            </div>
            <div>
                <div className="flex justify-between items-center">
                    <Link href="#" className="px-3 w-full">
                        <h3>{name}</h3>
                    </Link>
                    <button onClick={() => console.log('clicou no fav')} className={`${type === 'item' ? 'block' : 'hidden'} px-3 h-3`}>
                        <i>
                            <HiOutlineHeart />
                        </i>
                    </button>
                </div>
                <Link href="#" className="block px-3 pb-3">
                    <p>{price ? formatToReal(price) : false}</p>
                </Link>
            </div>
        </div>
    )
}