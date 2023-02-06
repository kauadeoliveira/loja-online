import { BannerType } from "@/types/banner";
import Image from "next/image";
import Button from "./Button";



export default function MainBanner({ img }: Pick<BannerType, 'img'>) {
    return(
        <div className="bg-slate-50 text-black flex flex-col gap-5 relative">
            <Image src={img} width={1000} height={1000} alt="zion-banner" />
            <div className="flex flex-col px-3 gap-3 absolute bottom-3  w-full">
                <h3 className="font-black font-roboto text-2xl text-slate-800">JORDAN ZION 1</h3>
                <div>
                    <Button mode="dark">
                        Comprar
                    </Button>
                </div>
            </div>
        </div>
    )
}