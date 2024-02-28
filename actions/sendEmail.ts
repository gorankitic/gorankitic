'use server'

import React from 'react'
// send email
import { Resend } from "resend"
// utils
import { validateString, getErrorMessage } from "@/lib/utils"
// components
import ContactFormEmail from "@/email/ContactFormEmail"

const resend = new Resend(process.env.RESEND_API_KEY)


export const sendEmail = async (formData: FormData) => {
    const message = formData.get("message");
    const email = formData.get("email");

    if (!validateString(email, 50)) {
        return {
            error: "Invalid email."
        }
    }
    if (!validateString(message, 500)) {
        return {
            error: "Invalid message."
        }
    }

    let data;

    try {
        data = await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>',
            to: 'kiticgoran90@gmail.com',
            subject: 'Message from portfolio contact form',
            reply_to: email as string,
            react: React.createElement(ContactFormEmail, { message: message as string, email: email as string })
        });
    } catch (error: unknown) {
        return { error: getErrorMessage(error) }
    }

    return { data }
}