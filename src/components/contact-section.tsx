'use client';

import { useEffect } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import Link from 'next/link';
import { useToast } from '@/hooks/use-toast';
import { submitContactForm } from '@/app/actions';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Loader2, Send } from 'lucide-react';
import { contactDetails } from '@/lib/data';

const initialState = {
  message: '',
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Sending...
        </>
      ) : (
        <>
          <Send className="mr-2 h-4 w-4" />
          Send Message
        </>
      )}
    </Button>
  );
}

const ContactSection = () => {
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast({
          title: 'Message Sent!',
          description: state.message,
        });
        // Reset the form - this is tricky with server actions.
        // A full implementation might involve a key on the form to force re-render.
      } else {
        toast({
          variant: 'destructive',
          title: 'Oops! Something went wrong.',
          description: state.message,
        });
      }
    }
  }, [state, toast]);

  return (
    <section id="contact" className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Get In Touch
              </CardTitle>
              <CardDescription className="mt-2 text-lg">
                Have a project in mind or just want to say hi? I'd love to hear from you.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-12">
              <form action={formAction} className="space-y-4">
                <Input name="name" placeholder="Your Name" required />
                <Input name="email" type="email" placeholder="Your Email" required />
                <Textarea name="message" placeholder="Your Message" rows={5} required />
                <SubmitButton />
              </form>
              <div className="space-y-6 flex flex-col justify-center">
                {contactDetails.map((detail) => (
                  <div key={detail.label} className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <detail.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{detail.label}</h4>
                      <Link href={detail.href} className="text-foreground/80 hover:text-primary transition-colors">
                        {detail.value}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
