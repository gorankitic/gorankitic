"use client"

// hooks
// ts-ignore because experimental_useFormStatus is not in the types
// @ts-ignore
import { experimental_useFormStatus as useFormStatus } from 'react-dom'
// icons
import { Send } from "lucide-react"

const SubmitButton = () => {
    const { pending } = useFormStatus();

    return (
        <button
            type='submit'
            className='group px-5 py-2 flex items-center justify-center gap-2 bg-primary text-white rounded-full outline-none transition-all focus:scale-105 hover:scale-105 active:scale-105 disabled:scale-100 disabled:opacity-70'
            disabled={pending}
        >
            {pending ? <div className='h-5 w-5 animate-spin rounded-full border-b-2 border-white'></div> : (
                <>
                    <span>Submit</span>
                    <Send className='h-4 w-4 opacity-90 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 ease-in-out' />
                </>
            )}
        </button>
    )
}

export default SubmitButton;