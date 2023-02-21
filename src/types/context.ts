import { CategoryPageType } from "./categoryPage";

export type ContextType = { 
    openMenu: boolean;
    handleOpenMenu: () => void;
    openSearch: boolean;
    handleOpenSearch: () => void;
    openFilterMenu: boolean;
    handleOpenFilterMenu: () => void;
    categories: CategoryPageType[];
}