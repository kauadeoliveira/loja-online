import { BannerType } from "@/types/banner";
import Image from "next/image";
import Button from "./Button";



export default function MainBanner({ img }: Pick<BannerType, "img">) {
    return(
        <div className="relative h-full w-full">
            <div className="h-full w-full brightness-50">
                <img src={`/${img}`} alt="Jordan Zion 1" className="w-full h-full"/>
            </div>

            <div
             className="
                absolute top-0 bottom-0 text-white
                w-full h-full flex justify-center items-center"
             >
                <div className="flex flex-col items-center">
                    <h3 className="font-bold font-josefin text-4xl">Air Jordan Zion 1</h3>
                    <div>
                        <Button mode="light">Comprar</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}