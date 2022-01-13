export const RECEIVE_USERS = "RECIVE_USERS";

export function reveiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}
