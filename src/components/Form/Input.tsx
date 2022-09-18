import {InputHTMLAttributes} from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input(props:InputProps) {
    return(
        <input
        {...props}
        className="bg-zinc-900 py-4 pl-8 rounded text-sm placeholder:text-zinc-500 "
      ></input>
    )
}