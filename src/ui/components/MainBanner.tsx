import Image from "next/image";

interface MainBannerProps {
    img: string;
}

export default function MainBanner({ img }: MainBannerProps) {
    return(
        <div className="bg-slate-50 p-2 text-black">
            <Image src={img} width={1000} height={1000} alt="zion-banner" />
            <h1 className="font-bold text-2xl font-cursive">AIR JORDAN ZION 1</h1>
            <p className="text-sm font-roboto">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
    )
}