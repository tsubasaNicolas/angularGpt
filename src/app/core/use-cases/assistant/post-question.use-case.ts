/* import { QuestionResponse } from '@interfaces/question.response';
import { environment } from 'environments/environment';

export const postQuestionUseCase = async (
  threadId: string,
  question: string
) => {
  try {
    const resp = await fetch(`${environment.assistantApi}/user-question`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ threadId, question }),
    });

    const replies = (await resp.json()) as QuestionResponse[];
    console.log({ replies });

    return replies;
  } catch (error) {
    throw new Error('Error crating thread ID');
  }
};
 */


import { environment } from 'environments/environment';

export interface QuestionResult {
  text: string;
  responseId: string;
}

export const postQuestionUseCase = async (
  question: string,
  previousResponseId?: string
): Promise<QuestionResult> => {
  try {
    const resp = await fetch(`${environment.assistantApi}/user-question`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ question, previousResponseId }),
    });

    const result = (await resp.json()) as QuestionResult;
    return result;
  } catch (error) {
    throw new Error('Error posting question');
  }
};