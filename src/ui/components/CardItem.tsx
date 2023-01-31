import Image from "next/image";
import Link from "next/link";
import { HiOutlineShoppingBag, HiOutlineHeart, HiX, HiOutlineMenu } from "react-icons/hi";

interface CardItemProps{
    img: string;
    title: string;
    price: string;
}

export default function CardItem({ img, title, price}: CardItemProps) {
    return(
        <Link 
         href="#"
         className="block bg-white h-96 w-80 rounded-xl shadow-inner drop-shadow-lg p-3 transition-transform duration-300 hover:scale-[1.03]">
            <Image src={img} width={320} height={384} alt={`${title} image`}/>

            <div>
                <div className="flex justify-between items-center">
                    <h3 className="font-black text-xl">{title}</h3>
                    <i>
                        <HiOutlineHeart />
                    </i>
                </div>
                <p className="font-bold">R${price}</p>
            </div>
        </Link>
    )
}