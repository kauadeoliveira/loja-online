type SizeType = {
    size: number | number[];
}

export default function Size({ size }: SizeType) {
    return(
        <>
            <input type="checkbox" name="" id="a" />
            <label htmlFor="a">
                {size}
            </label>
        </>
    )
}