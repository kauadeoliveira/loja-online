import Image from "next/image";
import Button from "./Button";

interface MainBannerProps {
    img: string;
}

export default function MainBanner({ img }: MainBannerProps) {
    return(
        <div className="bg-slate-50 py-3 text-black space-y-3">
            <Image src={img} width={1000} height={1000} alt="zion-banner" />
            <div className="space-y-1 px-1">
                <h3 className="font-black font-roboto text-2xl w-2/3 text-slate-800">AIR JORDAN ZION 1</h3>
                <Button mode="dark">
                    See more
                </Button>
            </div>
        </div>
    )
}