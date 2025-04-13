// src/ai/flows/study-abroad-assistant.ts
'use server';
/**
 * @fileOverview Provides ongoing conversational support for users navigating the study abroad process.
 *
 * - studyAbroadAssistant - A function that provides conversational support for study abroad.
 * - StudyAbroadAssistantInput - The input type for the studyAbroadAssistant function.
 * - StudyAbroadAssistantOutput - The return type for the studyAbroadAssistant function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const StudyAbroadAssistantInputSchema = z.object({
  query: z.string().describe('The user query related to study abroad assistance.'),
  applicationDetails: z
    .string()
    .optional()
    .describe('Details about the university application, deadlines, and guidelines.'),
});
export type StudyAbroadAssistantInput = z.infer<typeof StudyAbroadAssistantInputSchema>;

const StudyAbroadAssistantOutputSchema = z.object({
  response: z.string().describe('The AI assistant response to the user query.'),
});
export type StudyAbroadAssistantOutput = z.infer<typeof StudyAbroadAssistantOutputSchema>;

export async function studyAbroadAssistant(input: StudyAbroadAssistantInput): Promise<StudyAbroadAssistantOutput> {
  return studyAbroadAssistantFlow(input);
}

const prompt = ai.definePrompt({
  name: 'studyAbroadAssistantPrompt',
  input: {
    schema: z.object({
      query: z.string().describe('The user query related to study abroad assistance.'),
      applicationDetails: z
        .string()
        .optional()
        .describe('Details about the university application, deadlines, and guidelines.'),
    }),
  },
  output: {
    schema: z.object({
      response: z.string().describe('The AI assistant response to the user query.'),
    }),
  },
  prompt: `You are a helpful AI assistant specializing in providing guidance for students applying to universities abroad.

You will use your knowledge, along with any provided application details, to answer the user's query and provide the most relevant information and support.

User Query: {{{query}}}

{{#if applicationDetails}}
Application Details: {{{applicationDetails}}}
{{/if}}
`,
});

const studyAbroadAssistantFlow = ai.defineFlow<
  typeof StudyAbroadAssistantInputSchema,
  typeof StudyAbroadAssistantOutputSchema
>(
  {
    name: 'studyAbroadAssistantFlow',
    inputSchema: StudyAbroadAssistantInputSchema,
    outputSchema: StudyAbroadAssistantOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
