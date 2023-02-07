import { BannerType } from "@/types/banner";
import Image from "next/image";
import Button from "./Button";

interface MyBannerProps extends BannerType {
  direction: 'left' | 'right';
}

export default function Banner({ img, title, direction }: MyBannerProps) {
    return(
      <div className="h-full w-full relative md:grid md:gap-3 md:grid-cols-2 md:grid-rows-1">
        {/* Mobile */}

        <div className="h-full w-full bg-purple-800">
          <Image src={img} width={444} height={568} alt={title} />
        </div>

        <div 
         className={`
          h-full w-full text-white text-2xl bg-black opacity-50
          absolute top-0 bottom-0 flex justify-center items-center
          md:bg-transparent md:opacity-100
          md:static md:text-3xl md:text-black
          ${direction === 'left' ? ('md:col-start-2 md:col-end-2 md:row-start-1') 
          : ('md:col-start-1 md:col-end-1 row-start-1 md:justify-end')}
          `}
         >
          <div className={`flex flex-col gap-3 p-2 items-center`}>
            <h3 className="font-bold font-josefin">{title}</h3>
            <div>
              <Button mode="light">Comprar</Button>
            </div>
          </div>
        </div>
      </div>
    )
}