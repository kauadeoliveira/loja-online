import { ChildrenType } from "@/types/children";
import { createContext, useState } from "react";
import { ItemType } from '@/types/card'

type ContextProviderProps = {
    children: ChildrenType
}

export const MyContext = createContext({});

type CategoryPageType = {
    name: string,
    products: ItemType[]
}


export default function ContextProvider({ children }: ContextProviderProps) {
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const [openSearch, setOpenSearch] = useState<boolean>(false);
    // const [categoryPages, setCategoryPages] = useState<CategoryPageType[]>([
    //     {
    //         name: 'Masculino',
    //         products: [
    //             {''}
    //         ]
    //     }
    // ])

    const handleOpenMenu = () => setOpenMenu(!openMenu)
    const handleOpenSearch = () => setOpenSearch(!openSearch)

    return(
        <MyContext.Provider
         value={{
            openMenu,
            handleOpenMenu,
            openSearch,
            handleOpenSearch
         }}
        >
            {children}
        </MyContext.Provider>
    )
}