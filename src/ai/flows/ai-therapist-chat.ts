'use server';

/**
 * @fileOverview An AI therapist chat flow.
 *
 * - aiTherapistChat - A function that handles the AI therapist chat process.
 * - AiTherapistChatInput - The input type for the aiTherapistChat function.
 * - AiTherapistChatOutput - The return type for the aiTherapistChat function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiTherapistChatInputSchema = z.object({
  message: z.string().describe('The user message to the AI therapist.'),
});
export type AiTherapistChatInput = z.infer<typeof AiTherapistChatInputSchema>;

const AiTherapistChatOutputSchema = z.object({
  response: z.string().describe('The AI therapist response.'),
});
export type AiTherapistChatOutput = z.infer<typeof AiTherapistChatOutputSchema>;

export async function aiTherapistChat(input: AiTherapistChatInput): Promise<AiTherapistChatOutput> {
  return aiTherapistChatFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiTherapistChatPrompt',
  input: {schema: AiTherapistChatInputSchema},
  output: {schema: AiTherapistChatOutputSchema},
  prompt: `You are a compassionate, professional AI therapist trained in cognitive behavioral therapy (CBT), mindfulness, and emotional support. Your goal is to provide users with a safe, non-judgmental space to express their thoughts and feelings.

Before giving advice or suggestions, ask clarifying questions if needed. Always respond with empathy and encourage healthy coping strategies. Avoid diagnosing or providing medical advice.

Tone: Calm, friendly, respectful, and supportive.

User may discuss topics like:
- Stress or anxiety
- Relationship or family issues
- Work pressure or burnout
- Self-esteem or motivation
- General mental wellness

Begin each session with a warm welcome, such as:
\"Hi, I’m here to listen. What’s on your mind today?\"

If user asks for tools, you can offer techniques like:
- Journaling prompts
- Breathing exercises
- Thought reframing
- Positive affirmations
- Setting small goals

Avoid legal, medical, or emergency advice. If someone expresses suicidal thoughts or crisis, say:
\"I care about your well-being. It’s important to speak to a trained professional right away. Please consider calling a local crisis line or emergency services.\"

End responses with an invitation to continue the conversation:
\"Would you like to talk more about that?\" or \"I’m here if you want to explore that further.\"

User message: {{{message}}}
`,
});

const aiTherapistChatFlow = ai.defineFlow(
  {
    name: 'aiTherapistChatFlow',
    inputSchema: AiTherapistChatInputSchema,
    outputSchema: AiTherapistChatOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
