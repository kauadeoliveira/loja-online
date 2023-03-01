import { MyContext } from "@/context"
import { ContextType } from "@/types/context";
import { ItemType } from "@/types/item";
import { removeFromArray } from "@/utils/removeFromArray";
import { useContext, useRef, useEffect, useState, ChangeEventHandler, ChangeEvent, MouseEvent } from "react"
import { HiOutlineX } from "react-icons/hi";
import Accordion from "./Accordion";
import Button from "./Button";
import Checkbox from "./Checkbox";
import Radio from "./Radio";
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

    useEffect(() => console.log(products), [products])

    return(
        <div className={`
         w-full h-screen flex flex-col fixed top-0 left-0 bg-white z-20 px-5
         ${openFilterMenu ? 'transform-none' : 'translate-y-[-100vh]'}
         transition-transform duration-500
        `}>
            <div className="flex items-center justify-end text-xl py-3">
                <button className="opacity-60" onClick={handleOpenFilterMenu}>
                    <HiOutlineX />
                </button>
            </div> 
            <div className="h-full overflow-y-auto flex flex-col gap-4">
                <Accordion title="Ordenar Por">
                    <div className="flex flex-col gap-2 text-lg">
                        <Radio name="sortBy" id="newest" ref={newestRef} title="Lançamentos" onFocus={handleSortByFilter} />
                        <Radio name="sortBy" id="highToLow" ref={highToLowRef} title="Preço: Maior pro menor" onFocus={handleSortByFilter} />
                        <Radio name="sortBy" id="lowToHigh" ref={lowToHighRef} title="Preço: Menor pro maior" onFocus={handleSortByFilter} />
                    </div>
                </Accordion>
                <Accordion title="Tamanho">
                    <div className="flex gap-2">
                        {allSizes.map((size, index) => (
                            <Size size={size.toString()} id={size.toString()} key={index} onClick={handleSizesFilter}/>
                        ))}
                    </div>
                </Accordion>
                <Accordion title="Marca">
                    <div className="flex gap-2">
                        <Checkbox id="a" title="nike" />
                        <Checkbox id="b" title="adidas" />
                    </div>
                </Accordion>
                <Accordion title="Faixa de preço">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni inventore, veniam expedita reprehenderit animi eligendi laborum, repellat, obcaecati minus quod possimus harum molestiae quis facere illum repudiandae sint rerum deleniti.</p>
                </Accordion>
            </div>
        </div>
    )
}