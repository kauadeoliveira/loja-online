import { ChildrenType } from "@/types/children";
import { useState } from "react"
import { HiChevronRight } from "react-icons/hi"

type AccordionType = {
    title: string;
    children: ChildrenType;
} 

export default function Accordion({ title, children }: AccordionType) {
    const [openAccordion, setOpenAcordion] = useState<boolean>(false);
    const handleOpenAccordion = () => setOpenAcordion(!openAccordion);

    return(
        <div className="flex flex-col w-full">
            <div className={`flex gap-1 items-center font-semibold cursor-pointer text-2xl uppercase`} onClick={handleOpenAccordion}>
                <i className={`${openAccordion ? 'rotate-90' : 'rotate-0'} transition-transform duration-500`}>
                    <HiChevronRight />
                </i>
                <span>{title}</span>
            </div>
            <div className={`flex w-full overflow-y-hidden transition-all duration-500 ${openAccordion ? 'max-h-screen overflow-y-auto' : 'max-h-0'}`}>
                <div className="py-2 px-5">
                    {children}
                </div>
            </div>
        </div>
    )
}