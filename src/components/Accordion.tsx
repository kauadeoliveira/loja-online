import { useState } from "react"
import { HiChevronRight } from "react-icons/hi"

export default function Accordion() {
    const [openAccordion, setOpenAcordion] = useState<boolean>(false);

    const handleOpenAccordion = () => setOpenAcordion(!openAccordion);
    return(
        <div className="flex flex-col w-full bg-white">
            <div className="py-2 flex gap-1 items-center font-semibold cursor-pointer border-b" onClick={handleOpenAccordion}>
                <i className={`${openAccordion ? 'rotate-90' : 'rotate-0'} transition-transform duration-500`}>
                    <HiChevronRight />
                </i>
                <span>Marca</span>
            </div>
            <div 
             className={`
                flex w-full overflow-hidden overflow-y-auto
                ${openAccordion ? 'max-h-screen' : 'max-h-0'} transition-all duration-500`}
             >
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quibusdam deleniti eius molestiae vero porro hic excepturi consectetur dolore alias nostrum, quae maxime vel placeat repudiandae et sequi sint ex.</p>
            </div>
        </div>
    )
}