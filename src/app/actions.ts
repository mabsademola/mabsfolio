'use server';

import { z } from 'zod';
import { Resend } from 'resend';

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

// This is a placeholder for a real email sending implementation.
// In a real app, you would use a service like Resend, SendGrid, or Nodemailer.
export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
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

  // In a real app, you'd use an email sending service here.
  // For example, with Resend:
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // try {
  //   await resend.emails.send({
  //     from: 'onboarding@resend.dev',
  //     to: 'mabsademola@gmail.com',
  //     subject: `New message from ${name} via your portfolio`,
  //     text: `From: ${email}\n\n${message}`,
  //   });
  // } catch (error) {
  //   console.error('Email sending failed:', error);
  //   return {
  //     message: 'Failed to send message. Please try again later.',
  //     success: false,
  //   };
  // }

  console.log('Contact form submitted:');
  console.log({ name, email, message });
  
  await new Promise(res => setTimeout(res, 1000));

  return {
    message: "Thanks for reaching out! I'll get back to you soon.",
    success: true,
  };
}
