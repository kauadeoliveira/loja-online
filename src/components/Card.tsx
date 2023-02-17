import { ItemType } from "@/types/card";
import Link from "next/link";

interface CardType extends Pick<ItemType, 'name' | 'price' | 'url'> {
    img: string;
}
export default function Card({ img, name, price, url }: CardType) {
    return(
        <Link href={url} className="
            flex flex-col bg-white h-[450px] w-80 rounded-lg
            shadow-md transition-transform md:hover:scale-[1.01]"
        >
            <img src={img} alt={name} className="w-full h-full rounded-t-lg"/>
            <div className="p-2">
                <h4 className="font-roboto font-bold">{name}</h4>
                <p>R${price},00</p>
            </div>
        </Link>
    )
}