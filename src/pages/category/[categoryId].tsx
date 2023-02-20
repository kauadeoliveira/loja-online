import Card from '@/components/Card';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { MyContext } from '@/context';
import { CategoryPageType } from '@/types/categoryPage';
import { ContextType } from '@/types/context';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react'

import { HiOutlineAdjustments } from "react-icons/hi";


export default function Category() {
    const router = useRouter();
    const { categoryId } = router.query
    const myContext: ContextType = useContext(MyContext);
    const { categories }: Pick<ContextType, 'categories'> = myContext;

    const category = categories.filter(category => category.name.toLowerCase() === categoryId)[0]



    if(categoryId === 'masculino' || categoryId === 'feminino' || categoryId === 'infantil'){
        return(
            <>
            <Head>
                <title>{categoryId}</title>
            </Head>

            <Header />
            <div className='flex justify-between w-full top-[50px] mt-14 font-bold items-center py-2 px-5 border-b'>
                <h1 className='text-xl'>{categoryId}</h1>
                <button className='rotate-90 text-xl'>
                    <HiOutlineAdjustments />
                </button>
            </div>
            <main className='mt-1 mb-20'>
                <div className='flex gap-3 flex-wrap px-3'>
                    {
                        category.products.map((product, index) => {
                            return(
                                <Card
                                 size='md'
                                 img={product.img}
                                 name={product.name}
                                 price={product.price}
                                 url={product.url}
                                 key={index}
                                />
                            )
                        })
                    }
                </div>
            </main>
            <Footer />
            </>
        )
    }
    else{
        return(
            <h1>ERROR 404!</h1>
        )
    }
}