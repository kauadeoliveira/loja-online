import { BannerType } from "@/types/banner";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

interface MyBannerProps extends BannerType {
  direction: 'left' | 'right';
}

export default function Banner({ img, title, direction, route }: MyBannerProps) {
    return(
      <div className="h-full w-full relative md:grid md:gap-3 md:grid-cols-2 md:grid-rows-1 md:p-2">
        {/* Mobile */}

        <div className="h-full w-full brightness-50 md:brightness-100">
          <picture>
            <source srcSet={`/${img[1]}`} media="(min-width:600px)"/>
            <img src={`/${img[0]}`} className="w-full h-full" />
          </picture>
        </div>

        <div 
         className={`
          h-full w-full text-white text-xl
          absolute top-0 bottom-0 flex justify-center items-center
          md:bg-transparent md:opacity-100
          md:static md:text-black md:justify-start lg:text-3xl
          ${direction === 'left' ? ('md:col-start-2 md:col-end-2 md:row-start-1') 
          : ('md:col-start-1 md:col-end-1 row-start-1 md:justify-end')}
          `}
         >
          <div className={`flex flex-col gap-3 p-2 items-center`}>
            <h3 className="font-bold font-josefin text-2xl">{title}</h3>
            <div className="block md:hidden">
              <Button mode="light">
                <Link href={route}>
                  Comprar
                </Link>
              </Button>
            </div>
            <div className="hidden md:block">
              <Button mode="dark">
                <Link href={route}>
                  Comprar
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
}