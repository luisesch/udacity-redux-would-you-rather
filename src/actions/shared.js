import { getInitialData } from "../utils/api";
import { receiveQuestions } from "./questions";
import { reveiveUsers } from "./users";
import { setAuthedUser } from "./authedUser";

const AUTHED_ID = "sarahedo";

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(reveiveUsers(users));
      dispatch(receiveQuestions(questions));
      dispatch(setAuthedUser(AUTHED_ID));
    });
  };
}
