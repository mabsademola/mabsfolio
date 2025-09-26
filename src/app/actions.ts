'use server';

import { z } from 'zod';
import { Resend } from 'resend';
import { personalInfo } from '@/lib/data';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters.' })
    .max(1000, { message: 'Message must be less than 1000 characters.' }),
});

type ContactFormState = {
  message: string;
  success: boolean;
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 'your_api_key_here') {
    console.error('Resend API key is not configured.');
    return {
      message: 'The email service is not configured. Please contact the site administrator.',
      success: false,
    };
  }

  const validatedFields = contactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      message:
        validatedFields.error.flatten().fieldErrors.message?.[0] ||
        validatedFields.error.flatten().fieldErrors.email?.[0] ||
        validatedFields.error.flatten().fieldErrors.name?.[0] ||
        'An unknown error occurred.',
      success: false,
    };
  }
  
  const { name, email, message } = validatedFields.data;

  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: personalInfo.email,
      subject: `New message from ${name} via your portfolio`,
      text: `From: ${email}\n\n${message}`,
    });

    if (error) {
      console.error('Email sending failed:', error);
      return {
        message: 'Failed to send message. Please try again later.',
        success: false,
      };
    }

  } catch (error) {
    console.error('Email sending failed:', error);
    if (error instanceof Error && error.message.includes('invalid_api_key')) {
         return { message: 'The email service API key is invalid.', success: false };
    }
    return {
      message: 'An unexpected error occurred while sending the message.',
      success: false,
    };
  }

  return {
    message: "Thanks for reaching out! I'll get back to you soon.",
    success: true,
  };
}
