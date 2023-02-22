import { Dispatch, SetStateAction } from "react";

type SizeType = {
    size: number | number[];
    id: string;
}

export default function Size({ size, id }: SizeType) {
    return(
        <>
            <label htmlFor="a">
            <input type="checkbox" id={id} />
                {size}
            </label>
        </>
    )
}