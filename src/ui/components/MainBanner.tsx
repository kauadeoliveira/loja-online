import Image from "next/image";

interface MainBannerProps {
    img: string;
}

export default function MainBanner({ img }: MainBannerProps) {
    return(
        <div className="bg-slate-50 p-3 text-black space-y-4">
            <Image src={img} width={1000} height={1000} alt="zion-banner" />
            <div className="space-y-2">
                <h3 className="font-bold text-2xl font-cursive w-2/3">AIR JORDAN ZION 1</h3>
                <p className="text-sm font-roboto">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quaerat impedit in ipsam?</p>
            </div>
        </div>
    )
}