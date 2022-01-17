import React, { Component } from "react";
import { connect } from "react-redux";

class Poll extends Component {
  render() {
    const { question } = this.props;
    return (
      <div className="poll-short">
        Would you rather {question.optionOne.text} or {question.optionTwo.text}?
      </div>
    );
  }
}

function mapStateToProps({ questions }, { id }) {
  const question = questions[id];
  return { question };
}

export default connect(mapStateToProps)(Poll);
