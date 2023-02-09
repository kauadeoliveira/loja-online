import Head from 'next/head'
import { Inter } from '@next/font/google'
import Header from '@/components/Header'
import React, { useEffect, useState, useContext } from 'react'
import MainBanner from "../components/MainBanner"
import { TbBox, TbTruckReturn } from "react-icons/tb";
import { HiOutlineShoppingBag } from "react-icons/hi";


import Video from '@/components/Video'
import { MyContext } from '@/context'


import "swiper/css/pagination";
import "swiper/css";
import { ContextType } from '@/types/context'
import { InfoCardType } from '@/types/infoCard'
import InfoCard from '@/components/InfoCard'
import Card from '@/components/Card'
import { CardType } from '@/types/card'
import Carousel from '@/components/Carousel'
import Button from '@/components/Button'
import Banner from '@/components/Banner'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { openMenu }: Partial<ContextType> = useContext(MyContext);

  const [featuredItems, setFeaturedItems] = useState<CardType[]>([
    {title: 'Air Jordan Zion 1', img: '/men.png', price: 599, route:"#"},
    {title: 'Adidas Ozweego', img: '/girl.jpg', price: 999, route:"#"},
    {title: 'Nike Flex Runner 2', img: '/kids.png', price:250, route:"#"},
  ])

  const [infoCards, setInfoCards] = useState<InfoCardType[]>([
    {icon: TbBox, title: 'Entrega Gratis', description:'Aproveite a entrega gratuita em todos os itens do estoque'},
    {icon: HiOutlineShoppingBag, title: 'Retirada na loja', description:'Compre online e retire numa loja Viten mais próxima de você.'},
    {icon: TbTruckReturn, title: 'Devoluções fáceis e gratuitas', description:'Devolva os itens qualificados em até 14 dias após o recebimento.'},
  ])

  // Ocultar navbar do elemento HTML quando o Menu for aberto
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
      <main className='mt-12'>
        <section>
          {/* Mobile */}
          <div className="md:hidden">
            <MainBanner img='zion-mainbanner.png'/>
          </div>

          {/* Desktop */}
          <div className="hidden md:block">
            <Video />
          </div>
        </section>

        <section className='flex flex-col justify-center my-5 gap-3'>
          <h3 className='text-center font-josefin font-bold text-2xl'>Destaques</h3>
          <div className='block md:hidden'>
            <Carousel array={featuredItems}/>
          </div>
          <div className='hidden md:flex justify-center gap-5'>
            {featuredItems.map((item, index) => {
              return(
                <Card img={item.img} route={item.route} title={item.title} price={item.price} key={index}/>
              )
            })}
          </div>
          <div className='m-auto'>
            <Button mode='dark'>Ver Todos os Produtos</Button>
          </div>
        </section>

        <section className="h-[80vh] my-5">
          <Banner img={["forum-sm.png", "forum-md.png"]} title="Bad Bunny x Adidas Forum" direction='left'/>
        </section>

        <section className='h-[80vh] my-5'>
          <Banner img={["newbalance-sm.png", "newbalance-md.png"]} title="New Balance 9060 Sea Salt Surf" direction='right'/>
        </section>

        <section className='my-5 min-h-[80vh] flex justify-center flex-col gap-3'>
          <h3 className="font-bold font-josefin text-2xl text-center md:text-3xl">Ao comprar você tem direito à:</h3>
          <div className='flex flex-col gap-5 items-center md:flex-row w-full justify-center'>
            {infoCards.map((card, index) => <InfoCard key={index} title={card.title} description={card.description} icon={card.icon} />)}
          </div>
        </section>
      </main>
    </>
  )
}
