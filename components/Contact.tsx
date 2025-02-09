"use client";

// hooks
import { useForm } from 'react-hook-form';
import { useSectionInView } from '@/hooks/useSectionInView';
// components
import SectionHeading from '@/components/SectionHeading';
// types
import { emailSchema, EmailSchema } from '@/lib/types';
// lib
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Pen, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from "sonner";
// server actions
import { sendEmail } from '@/lib/actions';

const Contact = () => {
    const { ref } = useSectionInView("Contact", 0.8);
    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<EmailSchema>({ resolver: zodResolver(emailSchema) });

    const onSubmit = async ({ email, message }: EmailSchema) => {
        try {
            const { data, error } = await sendEmail({ email, message });
            if (data) {
                toast.success("✉ Email has been sent.");
                reset();
            }
            if (error) {
                toast.error("✉ Failed to send email. Please try again later.");
            }
        } catch (error) {
            toast.error("Something is wrong. Please try again later.");
        }
    }

    return (
        <motion.section
            ref={ref}
            id="contact"
            className="mb-24 sm:mb-28 w-[min(100%, 45rem)] text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
        >
            <SectionHeading>Contact me</SectionHeading>
            <p className='text-gray-700 -mt-8 dark:text-gray-300 text-sm'>
                <span role="img" aria-label="mail">✉️</span> Contact me directly at <a className='underline' href='mailto:kiticgoran90@gmail.com'>kiticgoran90@gmail.com</a> or through contact form
            </p>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className='flex flex-col dark:text-gray-900 mt-10'
            >
                <div className="relative">
                    <input
                        {...register("email")}
                        type="email"
                        name="email"
                        placeholder="Your email"
                        autoComplete="off"
                        disabled={isSubmitting}
                        className="w-full pl-10 pr-4 py-2 rounded-md placeholder-gray-500 borderBlack outline-none focus:outline-primary dark:bg-gray-200"
                    />
                    <Mail className="w-4 h-4 absolute left-3 top-3 text-gray-500 pointer-events-none" />
                    {errors.email && <p className="text-red-500 text-sm text-left mt-1">{errors.email.message}</p>}
                </div>
                <div className="relative my-4">
                    <textarea
                        {...register("message")}
                        name="message"
                        placeholder='Write your message...'
                        autoComplete='off'
                        disabled={isSubmitting}
                        className="w-full h-52 min-h-[50px] pl-10 pr-4 py-2 rounded-md placeholder-gray-500 borderBlack outline-none focus:outline-primary dark:bg-gray-200"
                    />
                    <Pen className="w-4 h-4 absolute left-3 top-3 text-gray-500 pointer-events-none" />
                    {errors.message && <p className="text-red-500 text-sm text-left -mt-1">{errors.message.message}</p>}
                </div>
                <div className='flex justify-end'>
                    <button
                        className='group w-32 px-5 py-2 flex items-center justify-center gap-2 bg-primary text-white rounded-full outline-none transition-all focus:scale-105 hover:scale-105 active:scale-105 disabled:scale-100 disabled:opacity-70'
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? <div className='h-5 w-5 animate-spin rounded-full border-b-2 border-white'></div> : (
                            <>
                                <span>Send</span>
                                <Send className='h-4 w-4 opacity-90 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 ease-in-out' />
                            </>
                        )}
                    </button>
                </div>
            </form>
        </motion.section>
    )
}

export default Contact;