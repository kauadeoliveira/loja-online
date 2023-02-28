import { FocusEventHandler, forwardRef, LegacyRef } from 'react'

interface RadioType extends Pick<HTMLInputElement, 'name' | 'id'>{
    title: string;
    onFocus?: FocusEventHandler | undefined
} 

const Radio = forwardRef(function Radio({ title, name, id, onFocus }: RadioType, ref: LegacyRef<HTMLInputElement>){
    return(
        <label htmlFor={id} className="labelForRadio flex capitalize items-center relative pl-5">
            <input type="radio" name={name} id={id} ref={ref} onFocus={onFocus}
            className="appearance-none "
            />

            <span className="block h-4 w-4 rounded-full border-2 border-black absolute left-0 top-[7px] after:content-[''] 
            after:h-2 after:w-2 after:bg-black after:block after:absolute after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:scale-0 after:rounded-full"></span>
            
            {title}
        </label>
    )
})

export default Radio