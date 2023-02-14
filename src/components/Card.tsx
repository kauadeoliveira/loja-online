import { CardType } from "@/types/card";
import Link from "next/link";


export default function Card({ img, title, price, route }: CardType) {
    return(
        <Link href={route} className="
            flex flex-col bg-white h-[450px] w-80 rounded-lg
            shadow-md transition-transform md:hover:scale-[1.01]"
        >
            <img src={img} alt={title} className="w-full h-full rounded-t-lg"/>
            <div className="p-2">
                <h4 className="font-roboto font-bold">{title}</h4>
                <p>R${price},00</p>
            </div>
        </Link>
    )
}