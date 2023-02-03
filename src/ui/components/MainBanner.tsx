import Image from "next/image";
import Button from "./Button";

type MainBannerProps = {
    img: string;
}

export default function MainBanner({ img }: MainBannerProps) {
    return(
        <div className="bg-slate-50 text-black flex flex-col gap-5 p-5">
            <Image src={img} width={1000} height={1000} alt="zion-banner" />
            <div className="flex flex-col px-1 gap-3">
                <h3 className="font-black font-roboto text-3xl text-slate-800">AIR JORDAN ZION 1</h3>
                <p className="font-roboto">Canalize novos canais de velocidade e poder em um tênis projetado para Zion e produzido para jogadores de qualquer nível. </p>
                <div>
                    <Button mode="dark">
                        See more
                    </Button>
                </div>
            </div>
        </div>
    )
}