export const RECEIVE_QUESTIONS = "RECIVE_QUESTIONS";

export function reveiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}
