import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/pagination";
import "swiper/css";
import Card from "./Card"

type CarouselType = {
    array: any[];
    title: string;
}

export default function Carousel({ array, title }: CarouselType) {
    return(
        <div>
            <h2 className="font-bold text-xl mb-4">{title}</h2>
            <Swiper slidesPerView={1.3}>
            {array.map((item, index) => (
                <SwiperSlide key={index} className="py-2 bg-none">
                    <Card img={item.img} name={item.name} price={item.price} type={item.type}/>
                </SwiperSlide>
            ))}
            </Swiper>
        </div>
    )
}