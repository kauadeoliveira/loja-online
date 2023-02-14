import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/pagination";
import "swiper/css";
import Card from "./Card"
import { CardType } from "@/types/card";

type CarouselType = {
    array: CardType[];
}

export default function Carousel({ array }: CarouselType) {
    return(
        <div>
            <div className="flex flex-wrap items-center p-3 md:hidden">
                <Swiper slidesPerView={1.1}>
                    {array.map((item, index) => (
                        <SwiperSlide key={index} className="py-2">
                            <Card img={item.img} title={item.title} price={item.price} route={item.route}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            
            <div className="hidden flex-wrap items-center p-5 md:flex lg:hidden">
                <Swiper slidesPerView={2.5}>
                    {array.map((item, index) => (
                        <SwiperSlide key={index} className="py-2">
                            <Card img={item.img} title={item.title} price={item.price} route={item.route}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="hidden flex-wrap items-center p-5 lg:flex">
                <Swiper slidesPerView={3.2}>
                    {array.map((item, index) => (
                        <SwiperSlide key={index} className="py-2">
                            <Card img={item.img} title={item.title} price={item.price} route={item.route}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}