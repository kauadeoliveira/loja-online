import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/pagination";
import "swiper/css";
import Card from "./Card"

type CarouselType = {
    array: any[];
    title: string;
}

export default function Carousel({ array }: CarouselType) {
    return(
        <div className="h-full flex flex-wrap">
            <h2 className="m-auto font-bold text-2xl">Mais vendidos</h2>
            <Swiper slidesPerView={1.2} spaceBetween={30} className="h-3/4">
            {array.map((item, index) => (
                <SwiperSlide key={index} className="py-2">
                    <Card img={item.img} name={item.name} price={item.price} type={item.type}/>
                </SwiperSlide>
            ))}
            </Swiper>
        </div>
    )
}