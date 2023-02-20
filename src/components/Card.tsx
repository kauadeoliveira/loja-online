import { CardType } from "@/types/card";
import { ItemType } from "@/types/item";
import Link from "next/link";

export default function Card({ img, name, price, url, size="md" }: CardType) {
    return(
        <Link href={url} className={`
        flex flex-col bg-white rounded-lg
        transition-transform
        ${size === 'sm'? 'h-[220px] w-[120px]' : size === 'md' ? 'h-[320px] w-[204px]' : 'h-[420px] w-[312.5px]'}`}
        >
            <img src={img} alt={name} className="w-full h-full rounded-t-lg"/>
            <div className="p-2">
                <h4 className="font-bold">{name}</h4>
                <p>R${price},00</p>
            </div>
        </Link>
    )
}

// h-[420px] w-80