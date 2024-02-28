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
            className='group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-teal-600 text-white rounded-full outline-none transition-all focus:scale-105 hover:scale-105 active:scale-105 disabled:scale-100 disabled:opacity-70'
            disabled={pending}
        >
            {pending ? <div className='h-5 w-5 animate-spin rounded-full border-b-2 border-white'></div> : (
                <>
                    Submit
                    <Send className='text-xs opacity-90 transition-all group-hover:translate-x-1 group-hover:-translate-y-1' />
                </>
            )}
        </button>
    )
}

export default SubmitButton;