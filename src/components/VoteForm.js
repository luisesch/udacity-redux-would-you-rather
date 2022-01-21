import React, { Component } from "react";
import { handleSaveAnswer } from "../actions/questions";
import { connect } from "react-redux";
import { OPTIONS } from "../utils/CONSTANTS";

class VoteForm extends Component {
  state = {
    selectedOption: "",
  };

  handleChange = (e) => {
    this.setState({ selectedOption: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { selectedOption } = this.state;
    const { dispatch } = this.props;
    dispatch(handleSaveAnswer(this.props.question.id, selectedOption));
  };

  render() {
    const { question } = this.props;
    const { selectedOption } = this.state;

    return (
      <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
        {OPTIONS.map((option) => (
          <div className="container-radio">
            <input
              type="radio"
              id={option.value}
              value={option.value}
              name="option"
            />
            <label htmlFor={option.value}>{question[option.value].text}</label>
          </div>
        ))}
        <button
          className="button"
          type="submit"
          disabled={selectedOption === ""}
        >
          SUBMIT
        </button>
      </form>
    );
  }
}

function mapStateToProps({ questions }, { id }) {
  const question = questions[id];
  return { question };
}

export default connect(mapStateToProps)(VoteForm);
