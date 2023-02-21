import { MyContext } from "@/context"
import { ContextType } from "@/types/context";
import { useContext } from "react"
import { HiOutlineX } from "react-icons/hi";


export default function FilterMenu() {
    const myContext: any = useContext(MyContext)
    const { openFilterMenu }: Pick<ContextType, 'openFilterMenu'> = myContext
    const { handleOpenFilterMenu }: Pick<ContextType, 'handleOpenFilterMenu'> = myContext

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
                    <input type="radio" name="sortBy" id="highLow" />
                    <label htmlFor="highLow">Preço: Maior pro menor</label>
                </div>

                <div className="flex items-center gap-2">
                    <input type="radio" name="sortBy" id="lowHigh" />
                    <label htmlFor="lowHigh">Preço: Menor Pro maior</label>
                </div>
            </div>

            <div className="h-[20vh] border-b flex flex-col justify-center p-2">
                <h2 className="text-lg mb-3 font-semibold">Cor</h2>
                <div className="flex items-center gap-2">
                    <input type="radio" name="sortBy" id="highLow" />
                    <label htmlFor="highLow">Preço: Maior pro menor</label>
                </div>

                <div className="flex items-center gap-2">
                    <input type="radio" name="sortBy" id="lowHigh" />
                    <label htmlFor="lowHigh">Preço: Menor Pro maior</label>
                </div>
            </div>

            <div className="h-[20vh] border-b flex flex-col justify-center p-2">
                <h2 className="text-lg mb-3 font-semibold">Tamanho</h2>
                <div className="flex items-center gap-2">
                    <input type="radio" name="sortBy" id="highLow" />
                    <label htmlFor="highLow">Preço: Maior pro menor</label>
                </div>

                <div className="flex items-center gap-2">
                    <input type="radio" name="sortBy" id="lowHigh" />
                    <label htmlFor="lowHigh">Preço: Menor Pro maior</label>
                </div>
            </div>
            
            <div className="h-[20vh] border-b flex flex-col justify-center p-2">
                <h2 className="text-lg mb-3 font-semibold">Faixa de preço</h2>
                <div className="flex items-center gap-2">
                    <input type="radio" name="sortBy" id="highLow" />
                    <label htmlFor="highLow">Preço: Maior pro menor</label>
                </div>

                <div className="flex items-center gap-2">
                    <input type="radio" name="sortBy" id="lowHigh" />
                    <label htmlFor="lowHigh">Preço: Menor Pro maior</label>
                </div>
            </div>
        </div>
    )
}