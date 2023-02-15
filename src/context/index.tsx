import { ChildrenType } from "@/types/children";
import { createContext, useState } from "react";

type ContextProviderProps = {
    children: ChildrenType
}

export const MyContext = createContext({});

export default function ContextProvider({ children }: ContextProviderProps) {
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const [openSearch, setOpenSearch] = useState<boolean>(false);

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