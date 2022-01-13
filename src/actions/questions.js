export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";

export function reveiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}
