import React, { Component } from "react";
import { connect } from "react-redux";
import { OPTIONS } from "../utils/CONSTANTS";
import { calcPercentage, isUsersVote } from "../utils/helpers";

class VoteDisplay extends Component {
  render() {
    const { question, authedUser } = this.props;
    const totalVotes =
      question.optionOne.votes.length + question.optionTwo.votes.length;

    return (
      <div className="container-result">
        {OPTIONS.map((option) => (
          <div key={option.value} className="result">
            <div>
              <div>
                {calcPercentage(
                  question[option.value].votes.length,
                  totalVotes
                )}
                %
              </div>
              <div className="total">
                {question[option.value].votes.length} total
              </div>
            </div>
            <div className="text-bar">
              <div className="optionText">{question[option.value].text}</div>
              <hr
                className="bar"
                width={
                  calcPercentage(
                    question[option.value].votes.length,
                    totalVotes
                  ) + "%"
                }
              ></hr>
            </div>
            {isUsersVote(question[option.value], authedUser) && (
              <span className="marker-vote">You</span>
            )}
          </div>
        ))}
      </div>
    );
  }
}

function mapStateToProps({ questions, authedUser }, { id }) {
  const question = questions[id];
  return { question, authedUser };
}

export default connect(mapStateToProps)(VoteDisplay);
