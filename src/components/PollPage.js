import React, { Component } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import VoteForm from "./VoteForm";
import VoteDisplay from "./VoteDisplay";

class PollPage extends Component {
  render() {
    const { question, authedUser, author } = this.props;

    function hasUserAnswered() {
      return (
        question.optionOne.votes.includes(authedUser) ||
        question.optionTwo.votes.includes(authedUser)
      );
    }

    return (
      <div>
        {question === undefined ? (
          <div className="container-content container-error">
            <FontAwesomeIcon icon={faExclamationTriangle} />
            <p>Sorry, this poll doesn't exist.</p>
          </div>
        ) : (
          <div>
            <h1>Would you rather...</h1>
            <div className="container-content container-vote">
              {hasUserAnswered() ? (
                <VoteDisplay id={question.id} />
              ) : (
                <VoteForm id={question.id} onAdd={this.saveAnswer} />
              )}

              <div className="author">
                <p>Author: {author.id}</p>
                <img
                  className="avatar"
                  src={author.avatarURL}
                  alt={`Avatar of user ${author.id}`}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps({ questions, authedUser, users }, props) {
  const { question_id } = props.match.params;
  const question = questions[question_id];
  const author = question !== undefined ? users[question.author] : null;
  return { question, authedUser, author };
}

export default connect(mapStateToProps)(PollPage);
