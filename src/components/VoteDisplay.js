import React, { Component } from "react";
import { connect } from "react-redux";
import { OPTIONS } from "../utils/CONSTANTS";

class VoteDisplay extends Component {
  render() {
    const { question, authedUser } = this.props;

    function calcPercentage(optionLength) {
      const total =
        question.optionOne.votes.length + question.optionTwo.votes.length;
      return Math.round((optionLength / total) * 100);
    }

    function isUsersVote(option) {
      return option.votes.includes(authedUser);
    }

    return (
      <div className="container-result">
        {OPTIONS.map((option) => (
          <div key={option} className="result">
            <div>
              <div>{calcPercentage(question[option].votes.length)}%</div>
              <div className="total">{question[option].votes.length} total</div>
            </div>
            <div className="text-bar">
              <div className="optionText">{question[option].text}</div>
              <hr
                className="bar"
                width={calcPercentage(question[option].votes.length) + "%"}
              ></hr>
            </div>
            {isUsersVote(question[option]) && (
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
