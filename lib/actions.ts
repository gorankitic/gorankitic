"use server";

// components
import EmailTemplate from "@/components/EmailTemplate";
// lib
import React from 'react';
import { Resend } from "resend";
import { getErrorMessage } from "@/lib/utils";
// types
import { EmailSchema } from "@/lib/types";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async ({ email, message }: EmailSchema) => {
    try {
        const { data, error } = await resend.emails.send({
            from: 'Portfolio Contact Form <onboarding@resend.dev>',
            to: 'kiticgoran90@gmail.com',
            subject: 'Message from portfolio contact form',
            replyTo: email,
            react: React.createElement(EmailTemplate, { message, email })
        });

        if (error) throw new Error(getErrorMessage(error));

        return { data };
    } catch (error) {
        console.error("❌Error in sendEmail server action: ", error);
        return { error: getErrorMessage(error) };
    }
}