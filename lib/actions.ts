"use server";

// components
import EmailTemplate from "@/components/EmailTemplate";
// lib
import React from 'react';
import { Resend } from "resend";
import { getErrorMessage } from "@/lib/utils";
// types
import { emailSchema, EmailSchema } from "@/lib/types";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async ({ email, message }: EmailSchema) => {
    // Server-side data validation with Zod
    const result = emailSchema.safeParse({ email, message });
    if (!result.success) {
        let errorMessage = result.error.issues
            .map(issue => issue.message)
            .join(". ");
        return { error: errorMessage };
    }
    // Send email
    const { data, error } = await resend.emails.send({
        from: 'Portfolio Contact Form <onboarding@resend.dev>',
        to: 'kiticgoran90@gmail.com',
        subject: 'Message from portfolio contact form',
        replyTo: email,
        react: React.createElement(EmailTemplate, { message, email })
    });

    if (error) {
        console.error("❌Resend API Error:", error);
        return { error: getErrorMessage(error) };
    }

    return { data };
}