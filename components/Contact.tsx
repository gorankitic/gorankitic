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

const Contact = () => {
    const { ref } = useSectionInView("Contact", 0.8);

    return (
        <motion.section
            ref={ref}
            id="contact"
            className='mb-24 sm:mb-28 w-[min(100%, 40rem)] text-center'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
        >
            <SectionHeading>Contact me</SectionHeading>
            <p className='text-gray-700 -mt-3 dark:text-gray-300'>
                Contact me directly at <a className='underline' href='mailto:kiticgoran90@gmail.com'>kiticgoran90@gmail.com</a> or through contact form.
            </p>

            <form
                action={async (formData) => {
                    const { data, error } = await sendEmail(formData);
                    if (error) {
                        toast.error(error)
                        return
                    }
                    toast.success('Email sent.')
                }}
                className='mt-10 flex flex-col dark:text-gray-900'
            >
                <input type='email' name="email" className='h-14 px-4 rounded-lg borderBlack' placeholder='Your email' autoComplete='off' required maxLength={50} />
                <textarea className='h-52 my-3 rounded-lg borderBlack p-4' placeholder='Your message' name="message" autoComplete='off' required maxLength={500} />
                <div className='flex justify-end'>
                    <SubmitButton />
                </div>
            </form>
        </motion.section>
    )
}

export default Contact;