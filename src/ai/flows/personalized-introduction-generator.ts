// A Genkit Flow for generating personalized introductions based on a style.

'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

/**
 * @fileOverview A Genkit Flow for generating personalized introductions.
 *
 * - generateIntroduction - A function that generates personalized introductions.
 * - GenerateIntroductionInput - The input type for the generateIntroduction function.
 * - GenerateIntroductionOutput - The return type for the generateIntroduction function.
 */

const GenerateIntroductionInputSchema = z.object({
  style: z.string().describe('The desired style of the introduction (e.g., professional, casual, funny).'),
});
export type GenerateIntroductionInput = z.infer<typeof GenerateIntroductionInputSchema>;

const GenerateIntroductionOutputSchema = z.object({
  introduction: z.string().describe('The generated personalized introduction.'),
});
export type GenerateIntroductionOutput = z.infer<typeof GenerateIntroductionOutputSchema>;

export async function generateIntroduction(input: GenerateIntroductionInput): Promise<GenerateIntroductionOutput> {
  return generateIntroductionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateIntroductionPrompt',
  input: {schema: GenerateIntroductionInputSchema},
  output: {schema: GenerateIntroductionOutputSchema},
  prompt: `You are a professional introduction writer. You will generate a personalized introduction for Mab's portfolio visitor based on their desired style. Mab is a Senior Flutter Developer with over five years of experience building and scaling cross-platform mobile applications for Android, iOS, and Web. He has a proven track record of building and maintaining apps currently serving 70,000+ registered users and 10,000+ daily actives. He is experienced in leading end-to-end development within startups and distributed teams, applying modern software architecture principles to create secure, maintainable, and high-performing applications. He is skilled at bridging mobile and backend systems to ensure reliable, scalable product delivery, with hands-on experience across on-demand services, social commerce, e-commerce, social networking, and blockchain-enabled platforms. Create an introduction in the following style: {{{style}}}`,
});

const generateIntroductionFlow = ai.defineFlow(
  {
    name: 'generateIntroductionFlow',
    inputSchema: GenerateIntroductionInputSchema,
    outputSchema: GenerateIntroductionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
