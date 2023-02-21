import { ChildrenType } from "@/types/children";
import { createContext, useState } from "react";
import { ItemType } from '@/types/item'
import { CategoryPageType } from "@/types/categoryPage";
import allProducts from "@/data/AllProducts";
import { type } from "os";

type ContextProviderProps = {
    children: ChildrenType
}

export type ProductFilterType = {
    colors: string | string[];
    sortBy: 'highToLow' | 'lowToHigh';
    sizes: number | number[];
}

export const MyContext = createContext({});


// Provider
export default function ContextProvider({ children }: ContextProviderProps) {
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const [openSearch, setOpenSearch] = useState<boolean>(false);
    const [openFilterMenu, setOpenFilterMenu] = useState<boolean>(false);

    const handleOpenMenu = () => setOpenMenu(!openMenu);
    const handleOpenSearch = () => setOpenSearch(!openSearch);
    const handleOpenFilterMenu = () => setOpenFilterMenu(!openFilterMenu);
    
    const [masculineProducts, setMasculineProducts] = useState<ItemType[]>(
        allProducts.filter(product => product.genrer !== 'feminine' && !product.kids)
    )
    const [feminineProducts, setFeminineProducts] = useState<ItemType[]>(
        allProducts.filter(product => product.genrer !== 'masculine' && !product.kids)
    )
    const [kidsProducts, setKidsProducts] = useState<ItemType[]>(
        allProducts.filter(product => product.kids)
    )

    const masculine: CategoryPageType = {name: 'Masculino', products: masculineProducts}
    const feminine: CategoryPageType = {name: 'Feminino', products: feminineProducts}
    const kids: CategoryPageType = {name: 'Infantil', products: kidsProducts}

    const categories: CategoryPageType[]= [masculine, feminine, kids]

    return(
        <MyContext.Provider
         value={{
            openMenu,
            handleOpenMenu,
            openSearch,
            handleOpenSearch,
            openFilterMenu,
            handleOpenFilterMenu,
            categories,
         }}
        >
            {children}
        </MyContext.Provider>
    )
}