import { ChildrenType } from "@/types/children";
import { createContext, useState } from "react";
import { ItemType } from '@/types/item'
import { CategoryPageType } from "@/types/categoryPage";
import allProducts from "@/data/AllProducts";

type ContextProviderProps = {
    children: ChildrenType
}

export const MyContext = createContext({});



export default function ContextProvider({ children }: ContextProviderProps) {
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const [openSearch, setOpenSearch] = useState<boolean>(false);
    const [openFilterMenu, setOpenFilterMenu] = useState<boolean>(false);

    const handleOpenMenu = () => setOpenMenu(!openMenu);
    const handleOpenSearch = () => setOpenSearch(!openSearch);
    const handleOpenFilterMenu = () => setOpenFilterMenu(!openFilterMenu);
    
    const [masculineProducts, setMasculineProducts] = useState<ItemType[]>(
        allProducts.filter(product => product.genrer !== 'feminine')
    )

    const [feminineProducts, setFeminineProducts] = useState<ItemType[]>(
        allProducts.filter(product => product.genrer !== 'masculine')
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
            categories
         }}
        >
            {children}
        </MyContext.Provider>
    )
}