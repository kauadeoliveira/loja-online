import { Item } from "@/types/item";
import { formatToReal } from "@/utils/formatToReal";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineHeart } from "react-icons/hi";


export default function CardItem({ img, name, price}: Pick<Item, 'name' | 'price' | 'img'>) {
    return(
        <div 
         className="block bg-white rounded-xl shadow-inner drop-shadow-lg transition-transform duration-300 hover:scale-[1.02] w-10/12 md:w-1/3">
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
                    <button onClick={() => console.log('clicou no fav')} className="px-3 h-3">
                        <i>
                            <HiOutlineHeart />
                        </i>
                    </button>
                </div>
                <Link href="#" className="block px-3 pb-3">
                    <p>{formatToReal(price)}</p>
                </Link>
            </div>
        </div>
    )
}