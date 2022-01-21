import { getInitialData } from "../utils/api";
import { setAuthedUser } from "./authedUser";
import { receiveQuestions } from "./questions";
import { reveiveUsers } from "./users";

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(reveiveUsers(users));
      dispatch(receiveQuestions(questions));
      dispatch(setAuthedUser(""));
    });
  };
}
