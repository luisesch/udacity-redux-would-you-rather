import { _saveQuestion, _saveQuestionAnswer } from "../utils/_DATA";
import { addQuestionToUser, addAnswerToUser } from "./users";
import { showLoading, hideLoading } from "react-redux-loading";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const SAVE_ANSWER = "SAVE_ANSWER";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

export function handleAddQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    const question = {
      author: authedUser,
      optionOneText: optionOneText,
      optionTwoText: optionTwoText,
    };

    dispatch(showLoading());

    return _saveQuestion(question)
      .then((question) => {
        dispatch(addQuestion(question));
        dispatch(addQuestionToUser(question));
      })
      .then(() => dispatch(hideLoading()));
  };
}

function saveAnswer(authedUser, qid, answer) {
  return {
    type: SAVE_ANSWER,
    authedUser,
    qid,
    answer,
  };
}

export function handleSaveAnswer(qid, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    dispatch(showLoading);

    return _saveQuestionAnswer({ authedUser, qid, answer })
      .then(() => {
        dispatch(saveAnswer(authedUser, qid, answer));
        dispatch(addAnswerToUser(authedUser, qid, answer));
      })
      .then(() => dispatch(hideLoading()));
  };
}
