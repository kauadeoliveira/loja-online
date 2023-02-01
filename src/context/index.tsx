import { ChildrenType } from "@/types/children";
import { createContext, useState } from "react";

type ContextProviderProps = {
    children: ChildrenType
}

export const MyContext = createContext({});

export default function ContextProvider({ children }: ContextProviderProps) {
    const [openMenu, setOpenMenu] = useState<boolean>(false);

    const handleOpenMenu = () => setOpenMenu(!openMenu)

    return(
        <MyContext.Provider
         value={{
            openMenu,
            handleOpenMenu,
         }}
        >
            {children}
        </MyContext.Provider>
    )
}