import Head from 'next/head'
import { Inter } from '@next/font/google'
import Header from '@/ui/components/Header'
import React, { createContext, useEffect, useState, useContext, useRef } from 'react'
import MainBanner from "../ui/components/MainBanner"

import Video from '@/ui/components/Video'
import CardItem from '@/ui/components/CardItem'
import { MyContext } from '@/context'
import { formatToReal } from '@/utils/formatToReal'

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/pagination";
import "swiper/css";
import { Item } from '@/types/item'


const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  const [urlVideo, setUrlVideo] = useState<string>();
  const { openMenu } = useContext(MyContext);

  const [featuredItems, setFeaturedItems] = useState<Item[]>([
    {name: 'Air Jordan Zion 1', img: '/men.png', price: 599},
    {name: 'Adidas Ozweego', img: '/girl.jpg', price: 999},
    {name: 'Puma RS-X Pikachu', img: '/kids.jpeg', price:449.90},
  ])

  useEffect(() => {
    if(typeof window !== 'undefined' && openMenu){
      window.document.documentElement.style.overflow = 'hidden'
    }else{
      window.document.documentElement.style.overflow = 'auto'
    }
    console.log(openMenu)
  }, [openMenu])

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />
      <main className='mt-12 space-y-14'>
        <section>
          <div className="hidden md:block">
            <Video />
          </div>
          <div className="md:hidden">
            <MainBanner img='/zion4.jpg'/>
          </div>
        </section>
        <div className='px-4'>
          <section>
            <h2>Popular Right Now</h2>
            <Swiper slidesPerView={1.3} spaceBetween={30}>
              {featuredItems.map((item, index) => (
                <SwiperSlide key={index}>
                    <CardItem img={item.img} name={item.name} price={item.price} />
                </SwiperSlide>
              ))}
            </Swiper>
          </section>
        </div>
      </main>
    </>
  )
}
