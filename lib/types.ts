// lib
import { z } from "zod";
import { links } from "@/lib/data";

export type SectionName = typeof links[number]["name"];

export const emailSchema = z.object({
    email: z.string().min(1, { message: "Email is required" }).max(50).email({ message: "Invalid email address" }),
    message: z.string().min(1, { message: "Message is required" }).max(500),
});

export type EmailSchema = z.infer<typeof emailSchema>;

