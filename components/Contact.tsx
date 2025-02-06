"use client"

// hooks
import { useSectionInView } from '@/hooks/useSectionInView';
import toast from 'react-hot-toast';
// components
import SectionHeading from './SectionHeading';
import SubmitButton from './SubmitButton';
// framer-motion
import { motion } from 'framer-motion';
// actions
import { sendEmail } from '@/actions/sendEmail';
import { Mail, Pen } from 'lucide-react';

const Contact = () => {
    const { ref } = useSectionInView("Contact", 0.8);

    return (
        <motion.section
            ref={ref}
            id="contact"
            className='mb-24 sm:mb-28 w-[min(100%, 45rem)] text-center'
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
                action={async (formData) => {
                    const { data, error } = await sendEmail(formData);
                    if (error) {
                        toast.error(error);
                        return;
                    }
                    toast.success('Email sent.');
                }}
                className='mt-10 flex flex-col dark:text-gray-900'
            >
                <div className="relative">
                    <input
                        type="email"
                        name="email"
                        placeholder="Your email"
                        autoComplete="off"
                        required
                        maxLength={50}
                        className="w-full pl-10 pr-4 py-2 rounded-md placeholder-gray-500 borderBlack outline-none focus:outline-primary dark:bg-gray-200"
                    />
                    <Mail className="w-4 h-4 absolute left-3 top-3 text-gray-500 pointer-events-none" />
                </div>
                <div className="relative my-4">
                    <textarea
                        name="message"
                        placeholder='Write your message...'
                        autoComplete='off'
                        required
                        maxLength={500}
                        className="w-full h-52 pl-10 pr-4 py-2 rounded-md placeholder-gray-500 borderBlack outline-none focus:outline-primary dark:bg-gray-200"
                    />
                    <Pen className="w-4 h-4 absolute left-3 top-3 text-gray-500 pointer-events-none" />
                </div>
                <div className='flex justify-end'>
                    <SubmitButton />
                </div>
            </form>
        </motion.section>
    )
}

export default Contact;