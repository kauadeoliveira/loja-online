import Head from 'next/head'
import { Inter } from '@next/font/google'
import Header from '@/ui/components/Header'
import React, { createContext, useEffect, useState, useContext, useRef } from 'react'
import MainBanner from "../ui/components/MainBanner"
import { TbBox, TbTruckReturn } from "react-icons/tb";
import { HiOutlineShoppingBag } from "react-icons/hi";


import Video from '@/ui/components/Video'
import CardItem from '@/ui/components/Card'
import { MyContext } from '@/context'
import { formatToReal } from '@/utils/formatToReal'

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/pagination";
import "swiper/css";
import { ContextType } from '@/types/context'
import Image from 'next/image'
import { InfoCardType } from '@/types/infoCard'
import InfoCard from '@/ui/components/InfoCard'
import Card from '@/ui/components/Card'
import { CardType } from '@/types/card'


// 
// 
// LEMBRAR DE ARRUMAR NOMENCLATURA DE TODOS TYPES
// 
// 

const inter = Inter({ subsets: ['latin'] })



export default function Home() {
  const [urlVideo, setUrlVideo] = useState<string>();
  const { openMenu }: Partial<ContextType> = useContext(MyContext);

  const [featuredItems, setFeaturedItems] = useState<CardType[]>([
    {name: 'Air Jordan Zion 1', img: '/men.png', price: 599},
    {name: 'Adidas Ozweego', img: '/girl.jpg', price: 999},
    {name: 'Nike Flex Runner 2', img: '/kids.png', price:250},
  ])

  const [infoCards, setInfoCards] = useState<InfoCardType[]>([
    {icon: TbBox, title: 'Entrega Gratis e Rapida', description:'Aproveite a entrega gratuita em todos os itens do estoque'},
    {icon: HiOutlineShoppingBag, title: 'Retirada na loja', description:'Compre online e retire numa loja Viten mais próxima de você.'},
    {icon: TbTruckReturn, title: 'Devoluções fáceis e gratuitas', description:'Devolva os itens qualificados em até 14 dias após o recebimento.'},
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
          {/* Mobile */}
          <div className="md:hidden">
              <MainBanner img='/zion3.jpg'/>
          </div>

          {/* Desktop */}
          <div className="hidden md:block">
            <Video />
          </div>
        </section>
        <div className='px-4 space-y-20'>
          <section>
            <h2 className="font-bold text-xl mb-4">Popular Right Now</h2>
            {/* Mobile */}
            <div className='md:hidden'>
              <Swiper slidesPerView={1.3}>
                {featuredItems.map((item, index) => (
                  <SwiperSlide key={index} className="py-2 bg-none">
                      <Card img={item.img} name={item.name} price={item.price} type='item'/>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Desktop */}
            <div className='hidden md:flex gap-5 justify-center p-5'>
              {featuredItems.map((item, index) => (
                <Card img={item.img} name={item.name} price={item.price} type='item' key={index}/>
              ))}
            </div>
          </section>

          <section>
            <div className='flex gap-10 flex-col items-center md:flex-row md:justify-center'>
              {infoCards.map((card, index) => <InfoCard key={index} title={card.title} description={card.description} icon={card.icon} />)}
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
