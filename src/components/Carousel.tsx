import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/pagination";
import "swiper/css";
import Card from "./Card"

type CarouselType = {
    array: any[];
}

export default function Carousel({ array }: CarouselType) {
    return(
        <div className="flex flex-wrap items-center p-3">
            <Swiper slidesPerView={1.2} spaceBetween={30}>
            {array.map((item, index) => (
                <SwiperSlide key={index} className="py-2">
                    <Card img={item.img} title={item.title} price={item.price} route={item.route}/>
                </SwiperSlide>
            ))}
            </Swiper>
        </div>
    )
}