import { MyContext } from "@/context"
import { ContextType } from "@/types/context";
import { ItemType } from "@/types/item";
import { removeFromArray } from "@/utils/removeFromArray";
import { useContext, useRef, useEffect, useState, ChangeEventHandler, ChangeEvent, MouseEvent } from "react"
import { HiOutlineX } from "react-icons/hi";
import Accordion from "./Accordion";
import Button from "./Button";
import SearchBar from "./SearchBar";
import Size from "./Size";

type Filters = {
    sizes: number[];
    sortBy?: 'highToLow' | 'lowToHigh';
}

type FilterMenuType = {
    products: ItemType[]
}

export default function FilterMenu({ products }: FilterMenuType) {
    const myContext: any = useContext(MyContext);
    const { openFilterMenu }: Pick<ContextType, 'openFilterMenu'> = myContext;
    const { handleOpenFilterMenu }: Pick<ContextType, 'handleOpenFilterMenu'> = myContext;
    const { filters, setFilters } = myContext;

    const highToLowRef = useRef<HTMLInputElement>(null);
    const lowToHighRef = useRef<HTMLInputElement>(null);
    const newestRef = useRef<HTMLInputElement>(null);

    const [sortByFilter, setSortByFilter] = useState<'highToLow' | 'lowToHigh' | 'newest'>('newest')
    const [sizesFilter, setSizesFilter] = useState<number[]>([]);
    const [brandsFilter, setBrandsFilter] = useState<string[]>([]);

    // Função para definir a ordem dos produtos: ordem de lançamento, do maior pro menor preço ou do menor pro maior preço
    const handleSortByFilter = () => {
        setSortByFilter(
            highToLowRef.current?.checked ? 'highToLow'
            : lowToHighRef.current?.checked ? 'lowToHigh' 
            : 'newest'
        )
    }

    // Função para selecioar os tamanhos de sapato que irão para o filtro.
    const handleSizesFilter = (event: MouseEvent<HTMLInputElement>) => {
        const size = Number((event.target as any).id)
        const sizes = sizesFilter;
        if((event.target as any).checked){
            sizes.push(size)
            setSizesFilter(sizes)
        }else{
            sizes.includes(size) ? setSizesFilter(removeFromArray(sizes, size)) : false
        }
    } 
    
    // Função que junta todos os 'sizes' sem repetir o valor em um array 
    const handleAllSizes = (products: ItemType[]): number[] => {
        const sizes = new Set<number>();
        products.map(product => {
            product.sizes.map(size => sizes.add(size))
        })
        return Array.from(sizes)
    } 
    const allSizes = handleAllSizes(products);

    const allBrands =  Array.from(new Set(products.map(product => product.brand)));

    const handleAllFilters = () => {
        setFilters({sizes: sizesFilter, sortBy: sortByFilter});
        handleOpenFilterMenu()
        console.log(filters)
    }

    // useEffect(() => console.log(products), [])

    return(
        <div className={`
         w-full h-screen flex flex-col fixed top-0 left-0 bg-white z-20
         ${openFilterMenu ? 'transform-none' : 'translate-y-[-100vh]'}
         transition-transform duration-500
        `}>
            <div className="flex items-center px-5 py-3 justify-between text-2xl">
                <h1 className="font-josefin font-semibold">Filter</h1>
                <button className="opacity-60" onClick={handleOpenFilterMenu}>
                    <HiOutlineX />
                </button>
            </div>
            
            <div className="h-full overflow-y-auto">
                <div className="border-b flex flex-col px-2 py-5">
                    <h2 className="text-lg mb-3 font-semibold">Ordenar por</h2>
                    <label htmlFor="newest" className="flex gap-1 items-center">
                        <input
                            type="radio"
                            name="sortBy"
                            id="newest"
                            ref={newestRef}
                            defaultChecked
                            onFocus={handleSortByFilter}
                            className="
                                appearance-none w-4 h-4 border-2 rounded-full
                                checked:bg-black checked:border-4 cursor-pointer
                            "
                        />
                        <span>Lançamentos</span>
                    </label>
                    <label htmlFor="highToLow" className="flex gap-1 items-center">
                        <input
                            type="radio"
                            name="sortBy"
                            id="highToLow"
                            ref={highToLowRef}
                            onFocus={handleSortByFilter}
                            className="
                                appearance-none w-4 h-4 border-2 rounded-full
                                checked:bg-black checked:border-4 cursor-pointer
                            "
                        />
                        <span>Preço: Maior pro menor</span>
                    </label>
                    <label htmlFor="lowToHigh" className="flex gap-1 items-center">
                        <input
                            type="radio"
                            name="sortBy"
                            id="lowToHigh"
                            ref={lowToHighRef}
                            onFocus={handleSortByFilter}
                            className="
                                appearance-none w-4 h-4 border-2 rounded-full
                                checked:bg-black checked:border-4 cursor-pointer
                            "
                        />
                        <span>Preço: Menor Pro maior</span>
                    </label>
                </div>
                <div className="border-b flex flex-col px-2 py-5">
                    <h2 className="text-lg mb-3 font-semibold">Tamanho</h2>
                    <div className="flex gap-3">
                        {allSizes.map((size, index) => {
                            return(
                                <label
                                    htmlFor={`${size}`}
                                    key={index}
                
                                    className="
                                    cursor-pointer relative hover:bg-slate-200
                                    transition-colors duration-300 h-7 w-9 rounded-md"
                                >
                                    <input
                                        type="checkbox"
                                        id={`${size}`}
                                        onClick={handleSizesFilter}
                                        className="
                                        appearance-none h-full w-full
                                        rounded-md border-2 checked:border-black"
                                    />
                                    <span className="flex h-full w-full absolute top-0 justify-center items-center">
                                        {size}
                                    </span>
                                </label>
                            )
                        })}
                    </div>
                </div>
                
                <div className="border-b flex flex-col px-2 py-5">
                    <h2 className="text-lg mb-3 font-semibold">Marca</h2>
                    <div className="flex gap-2">
                        <label htmlFor="">
                            <input type="checkbox" />
                            aaaaaaaaa
                        </label>
                    </div>
                </div>
                <div className="border-b flex flex-col px-2 py-5">
                    <h2 className="text-lg mb-3 font-semibold">Faixa de preço</h2>
                </div>
                <Accordion />
                <Accordion />
                <Accordion />
                <Accordion />
            </div>
        </div>
    )
}