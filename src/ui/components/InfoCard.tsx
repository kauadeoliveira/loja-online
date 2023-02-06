import { InfoCardType } from "@/types/infoCard";

export default function InfoCard({ icon, title, description }: InfoCardType) {
    return(
        <div className="flex flex-col items-center text-center w-64">
            <i className="text-6xl">
                {icon()}
            </i>
            <h4 className="font-bold text-lg font-roboto">{title}</h4>
            <p className="font-roboto">{description}</p>
      </div>
    )
}