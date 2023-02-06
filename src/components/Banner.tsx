import { BannerType } from "@/types/banner";
import Image from "next/image";
import Button from "./Button";

export default function Banner({ img, title }: BannerType) {
    return(
        <div>
            <div className='lg:hidden'>
              <Image src={img} width={1024} height={1024} alt={title}/>
              <div className='p-3 flex flex-col gap-2'>
                <h3 className="font-black font-roboto text-2xl text-slate-800">{title}</h3>
                <div>
                  <Button mode='dark'>Saiba mais</Button>
                </div>
              </div>
            </div>
            
            <div className='hidden lg:flex gap-10'>
              <Image src={img} width={700} height={700} alt={title}/>
              <div className="flex justify-center flex-col gap-3">
                <h3 className="font-black font-roboto text-3xl text-slate-800">{title}</h3>
                <div>
                  <Button mode='dark'>Saiba mais</Button>
                </div>
              </div>
            </div>
        </div>
    )
}