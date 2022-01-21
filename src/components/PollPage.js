import React, { Component } from "react";
import { connect } from "react-redux";
import { handleSaveAnswer } from "../actions/questions";
import VoteForm from "./VoteForm";

class PollPage extends Component {
  saveAnswer = (selectedOption) => {
    const { dispatch, question } = this.props;
    dispatch(handleSaveAnswer(question.id, selectedOption));
  };

  render() {
    const { question, authedUser } = this.props;

    function hasUserAnswered() {
      return (
        question.optionOne.votes.includes(authedUser) ||
        question.optionTwo.votes.includes(authedUser)
      );
    }

    return (
      <div>
        <h1>Would you rather...</h1>

        <div className="container-content container-vote">
          {hasUserAnswered() ? (
            <p>Aready answered</p>
          ) : (
            <VoteForm id={question.id} onAdd={this.saveAnswer} />
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ questions, authedUser }, props) {
  const { question_id } = props.match.params;
  const question = questions[question_id];
  return { question, authedUser };
}

export default connect(mapStateToProps)(PollPage);
