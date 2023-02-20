import { ChildrenType } from "@/types/children";
import { createContext, useState } from "react";
import { ItemType } from '@/types/item'
import { CategoryPageType } from "@/types/categoryPage";

type ContextProviderProps = {
    children: ChildrenType
}

export const MyContext = createContext({});



export default function ContextProvider({ children }: ContextProviderProps) {
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const [openSearch, setOpenSearch] = useState<boolean>(false);
    
    const allProducts: ItemType[] = [
        {
            name: 'Air Jordan Zion 1',
            img: '/men.png',
            id: 1,
            brand: 'jordan',
            colors: 'black',
            genrer: 'masculine',
            kids: false,
            price: 900,
            sizes: [40, 43],
            url: '#'
        },
        {
            name: 'Air Jordan Zion 1',
            img: '/men.png',
            id: 1,
            brand: 'jordan',
            colors: 'black',
            genrer: 'masculine',
            kids: false,
            price: 900,
            sizes: [40, 43],
            url: '#'
        },
        {
            name: 'Air Jordan Zion 1',
            img: '/men.png',
            id: 1,
            brand: 'jordan',
            colors: 'black',
            genrer: 'masculine',
            kids: false,
            price: 900,
            sizes: [40, 43],
            url: '#'
        },
        {
            name: 'Air Jordan Zion 1',
            img: '/men.png',
            id: 1,
            brand: 'jordan',
            colors: 'black',
            genrer: 'masculine',
            kids: false,
            price: 900,
            sizes: [40, 43],
            url: '#'
        },
        {
            name: 'Air Jordan Zion 1',
            img: '/men.png',
            id: 1,
            brand: 'jordan',
            colors: 'black',
            genrer: 'masculine',
            kids: false,
            price: 900,
            sizes: [40, 43],
            url: '#'
        },
        {
            name: 'Air Jordan Zion 1',
            img: '/men.png',
            id: 1,
            brand: 'jordan',
            colors: 'black',
            genrer: 'masculine',
            kids: false,
            price: 900,
            sizes: [40, 43],
            url: '#'
        },
        {
            name: 'Air Jordan Zion 1',
            img: '/men.png',
            id: 1,
            brand: 'jordan',
            colors: 'black',
            genrer: 'masculine',
            kids: false,
            price: 900,
            sizes: [40, 43],
            url: '#'
        },
        {
            name: 'Air Jordan Zion 1',
            img: '/men.png',
            id: 1,
            brand: 'jordan',
            colors: 'black',
            genrer: 'masculine',
            kids: false,
            price: 900,
            sizes: [40, 43],
            url: '#'
        },
        {
            name: 'Air Jordan Zion 1',
            img: '/men.png',
            id: 1,
            brand: 'jordan',
            colors: 'black',
            genrer: 'masculine',
            kids: false,
            price: 900,
            sizes: [40, 43],
            url: '#'
        },
        {
            name: 'Air Jordan Zion 1',
            img: '/men.png',
            id: 1,
            brand: 'jordan',
            colors: 'black',
            genrer: 'masculine',
            kids: false,
            price: 900,
            sizes: [40, 43],
            url: '#'
        },
        {
            name: 'Air Jordan Zion 1',
            img: '/men.png',
            id: 1,
            brand: 'jordan',
            colors: 'black',
            genrer: 'masculine',
            kids: false,
            price: 900,
            sizes: [40, 43],
            url: '#'
        },
        {
            name: 'Air Jordan Zion 1',
            img: '/men.png',
            id: 1,
            brand: 'jordan',
            colors: 'black',
            genrer: 'masculine',
            kids: false,
            price: 900,
            sizes: [40, 43],
            url: '#'
        },
        {
            name: 'Air Jordan Zion 1',
            img: '/men.png',
            id: 1,
            brand: 'jordan',
            colors: 'black',
            genrer: 'masculine',
            kids: false,
            price: 900,
            sizes: [40, 43],
            url: '#'
        },
        {
            name: 'Adidas Ozweego',
            img: '/girl.jpg',
            id: 2,
            brand: 'adidas',
            colors: 'pink',
            genrer: 'feminine',
            kids: false,
            price: 500,
            sizes: [35, 37],
            url: '#'
        },
        {
            name: 'Nike Flex Runner 2',
            id: 3,
            img: '/kids.png',
            brand: 'nike',
            colors: 'red',
            genrer: 'unisex',
            kids: true,
            price: 400,
            sizes: [31, 33],
            url: '#'
        }
    ]

    const masculine: CategoryPageType = {
        name: 'Masculino',
        products: allProducts.filter(product => product.genrer !== 'feminine'),
    }

    const feminine: CategoryPageType = {
        name: 'Feminino',
        products: allProducts.filter(product => product.genrer !== 'masculine'),
    }

    const kids: CategoryPageType = {
        name: 'Infantil',
        products: allProducts.filter(product => product.kids)
    }

    const categories: CategoryPageType[]= [masculine, feminine, kids]

    const handleOpenMenu = () => setOpenMenu(!openMenu);
    const handleOpenSearch = () => setOpenSearch(!openSearch);

    return(
        <MyContext.Provider
         value={{
            openMenu,
            handleOpenMenu,
            openSearch,
            handleOpenSearch,
            categories
         }}
        >
            {children}
        </MyContext.Provider>
    )
}