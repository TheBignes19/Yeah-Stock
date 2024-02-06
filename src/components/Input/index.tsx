import { Icon } from "@phosphor-icons/react"
import React from "react"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{
    starIcon?: Icon;
}

export function Input({ starIcon: StarIcon, ...rest }: InputProps) {
    return (
        <div className="flex items-center gap-5 bg-[#242424] border border-black-light rounded-lg px-4">
            {StarIcon && <StarIcon size={20} weight="bold" className="text-white"/>}
            <input 
            { ...rest}
            type="text" 
            className="placeholder:text-black-light text-white bg-transparent outline-none w-full h-8 px-1"/>
        </div>
        
    )
}