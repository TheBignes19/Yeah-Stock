import React from "react"

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLAreaElement> {
    label: string
}

export function TextArea ({ label, ...rest } : TextAreaProps) {
    return (
        <div>
            <label className="text-gray-primary">{label}</label>

            <textarea rows={4} {...rest} className="w-full bg-[#242424] text-gray-primary placeholder:text-gray-primary p-2 outline-none rounded-lg">

            </textarea>
        </div>
    )
}