import { MyContext } from "@/context"
import { ContextType } from "@/types/context";
import { ItemType } from "@/types/item";
import { removeFromArray } from "@/utils/removeFromArray";
import { useContext, useRef, useEffect, useState, ChangeEventHandler, ChangeEvent, MouseEvent } from "react"
import { HiOutlineX } from "react-icons/hi";
import Button from "./Button";
import Size from "./Size";

type Filters = {
    colors: string | string[];
    sizes: number | number[];
    sortBy: 'highToLow' | 'lowToHigh';
}

type FilterMenuType = {
    products: ItemType[]
}

export default function FilterMenu({ products }: FilterMenuType) {
    const myContext: any = useContext(MyContext);
    const { openFilterMenu }: Pick<ContextType, 'openFilterMenu'> = myContext;
    const { handleOpenFilterMenu }: Pick<ContextType, 'handleOpenFilterMenu'> = myContext;

    const [filters, setFilters] = useState<Filters>();
    const highToLowRef = useRef<HTMLInputElement>(null);
    const lowToHighRef = useRef<HTMLInputElement>(null);
    const [sortByFilter, setSortByFilter] = useState<'highToLow' | 'lowToHigh'>()
    const [sizesFilter, setSizesFilter] = useState<number[]>([]);


    const handleSortByFilter = () => setSortByFilter(highToLowRef.current?.checked ? 'highToLow' : 'lowToHigh')

    const handleSizesFilter = (event: MouseEvent<HTMLInputElement>) => {
        const size = Number((event.target as any).id)
        const sizes = sizesFilter;
        if((event.target as any).checked){
            sizes.push(size)
            setSizesFilter(sizes)
        }
        else{
            sizes.includes(size) ? setSizesFilter(removeFromArray(sizes, size)) : false
        }
    } 
    

    const handleAllSizes = (products: ItemType[]): number[] => {
        const sizes: number[] = [];
        products.map(product => {
            product.sizes.map(size => !sizes.includes(size) ? sizes.push(size) : false)
        })
        return sizes
    } 

    const allSizes = handleAllSizes(products);

    return(
        <div className={`
         h-screen w-full fixed bottom-0 bg-white z-20
         ${openFilterMenu ? 'transform-none' : 'translate-y-[-100vh]'}
         transition-transform duration-500
        `}>
            <div className="flex items-center px-5 py-3 justify-between text-2xl">
                <h1 className="font-josefin font-semibold">Filter</h1>
                <button className="opacity-60" onClick={handleOpenFilterMenu}>
                    <HiOutlineX />
                </button>
            </div>
            <div className="h-[20vh] border-b flex flex-col justify-center p-2">
                <h2 className="text-lg mb-3 font-semibold">Ordenar por</h2>
                <div className="flex items-center gap-2">
                    <input type="radio" name="sortBy" id="highToLow" ref={highToLowRef} onFocus={handleSortByFilter} />
                    <label htmlFor="highLow">Preço: Maior pro menor</label>
                </div>

                <div className="flex items-center gap-2">
                    <input type="radio" name="sortBy" id="lowToHigh" ref={lowToHighRef} onFocus={handleSortByFilter} />
                    <label htmlFor="lowHigh">Preço: Menor Pro maior</label>
                </div>
            </div>

            <div className="h-[20vh] border-b flex flex-col justify-center p-2">
                <h2 className="text-lg mb-3 font-semibold">Tamanho</h2>
                <div className="flex gap-3">
                    {allSizes.map((size, index) => {
                        return(
                            <label
                             htmlFor={`${size}`}
                             key={index}
                             
                             className="cursor-pointer relative"
                            >
                                <input 
                                 type="checkbox" 
                                 id={`${size}`}
                                 onClick={handleSizesFilter}
                                 className="
                                    appearance-none h-7 w-9 border-[1px]
                                    rounded-md checked:border-black" 
                                />
                                <span className="flex h-7 w-9 absolute top-0 justify-center items-center">
                                    {size}
                                </span>
                            </label>
                        )
                    })}
                </div>
            </div>
            
            <div className="h-[20vh] border-b flex flex-col justify-center p-2">
                <h2 className="text-lg mb-3 font-semibold">Faixa de preço</h2>
            </div>

            <div>
                <Button mode="light">Limpar</Button>
                <Button mode="dark">Aplicar</Button>
            </div>
        </div>
    )
}