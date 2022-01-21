import React, { Component } from "react";
import { connect } from "react-redux";

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
    this.props.onAdd(selectedOption);
  };

  render() {
    const { question } = this.props;
    const { selectedOption } = this.state;

    return (
      <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
        <div className="container-radio">
          <input type="radio" id="optionOne" value="optionOne" name="option" />
          <label htmlFor="optionOne">{question.optionOne.text}</label>
        </div>
        <div className="container-radio">
          <input type="radio" id="optionTwo" value="optionTwo" name="option" />
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
    );
  }
}

function mapStateToProps({ questions }, { id }) {
  const question = questions[id];
  return { question };
}

export default connect(mapStateToProps)(VoteForm);
