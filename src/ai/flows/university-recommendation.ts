// university-recommendation.ts
'use server';
/**
 * @fileOverview A university recommendation AI agent.
 *
 * - universityRecommendation - A function that handles the university recommendation process.
 * - UniversityRecommendationInput - The input type for the universityRecommendation function.
 * - UniversityRecommendationOutput - The return type for the universityRecommendation function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const UniversityRecommendationInputSchema = z.object({
  educationLevel: z.string().describe('The current education level of the user.'),
  fieldOfStudy: z.string().describe('The field of study of the user.'),
  academicInterests: z.string().describe('The academic interests of the user.'),
});
export type UniversityRecommendationInput = z.infer<typeof UniversityRecommendationInputSchema>;

const UniversityRecommendationOutputSchema = z.object({
  recommendedCountries: z.array(z.string()).describe('The recommended countries for higher studies.'),
  recommendedUniversities: z.array(z.string()).describe('The recommended universities based on academic credentials and interests.'),
});
export type UniversityRecommendationOutput = z.infer<typeof UniversityRecommendationOutputSchema>;

export async function universityRecommendation(input: UniversityRecommendationInput): Promise<UniversityRecommendationOutput> {
  return universityRecommendationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'universityRecommendationPrompt',
  input: {
    schema: z.object({
      educationLevel: z.string().describe('The current education level of the user.'),
      fieldOfStudy: z.string().describe('The field of study of the user.'),
      academicInterests: z.string().describe('The academic interests of the user.'),
    }),
  },
  output: {
    schema: z.object({
      recommendedCountries: z.array(z.string()).describe('The recommended countries for higher studies.'),
      recommendedUniversities: z.array(z.string()).describe('The recommended universities based on academic credentials and interests.'),
    }),
  },
  prompt: `You are an expert in higher education and provide recommendations for countries and universities based on a user's profile data, academic credentials, and interests.

  Based on the following information, provide a list of recommended countries and universities.

  Education Level: {{{educationLevel}}}
  Field of Study: {{{fieldOfStudy}}}
  Academic Interests: {{{academicInterests}}}
  
  Format the output as a JSON object with 'recommendedCountries' and 'recommendedUniversities' fields. Each field should contain a list of strings.
  `,
});

const universityRecommendationFlow = ai.defineFlow<
  typeof UniversityRecommendationInputSchema,
  typeof UniversityRecommendationOutputSchema
>(
  {
    name: 'universityRecommendationFlow',
    inputSchema: UniversityRecommendationInputSchema,
    outputSchema: UniversityRecommendationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
