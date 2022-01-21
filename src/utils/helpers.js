// calculate percentage
export function calcPercentage(optionLength, total) {
  return Math.round((optionLength / total) * 100);
}

// check if user has answered the question
export function hasUserAnswered(questionId, user) {
  return user.answers.hasOwnProperty(questionId);
}

// check if option is the one user has voted for
export function isUsersVote(option, user) {
  return option.votes.includes(user);
}
