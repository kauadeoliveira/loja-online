import { InfoCardType } from "@/types/infoCard";

export default function InfoCard({ icon, title, description }: InfoCardType) {
    return(
        <div 
         className="
            flex flex-col items-center justify-center text-center w-48 h-48 gap-2
            md:w-56 md:h-56
            lg:w-80 lg:h-72"
        >
            <i className="text-6xl lg:text-8xl">
                {icon()}
            </i>
            <div>
                <h4 className="font-bold text-lg font-josefin lg:text-xl">{title}</h4>
                <p className="font-roboto text-sm">{description}</p>
            </div>
      </div>
    )
}