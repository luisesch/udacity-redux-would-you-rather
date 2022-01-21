import React, { Component } from "react";
import { connect } from "react-redux";
import { handleSaveAnswer } from "../actions/questions";

class PollPage extends Component {
  state = {
    selectedOption: "",
  };

  handleChange = (e) => {
    this.setState({ selectedOption: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { selectedOption } = this.state;
    const { dispatch, question } = this.props;
    dispatch(handleSaveAnswer(question.id, selectedOption));
  };

  render() {
    const { question, authedUser } = this.props;
    const { selectedOption } = this.state;

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
            <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
              <div className="container-radio">
                <input
                  type="radio"
                  id="optionOne"
                  value="optionOne"
                  name="option"
                />
                <label htmlFor="optionOne">{question.optionOne.text}</label>
              </div>
              <div className="container-radio">
                <input
                  type="radio"
                  id="optionTwo"
                  value="optionTwo"
                  name="option"
                />
                <label htmlFor="optionTwo">{question.optionTwo.text}</label>
              </div>
              <button
                className="button"
                type="submit"
                disabled={selectedOption === ""}
              >
                SUBMIT
              </button>
            </form>
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
