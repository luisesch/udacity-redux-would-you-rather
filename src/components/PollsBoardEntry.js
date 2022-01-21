import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class PollsBoardEntry extends Component {
  render() {
    const { question } = this.props;
    return (
      <Link to={`/questions/${question.id}`} className="poll-short">
        Would you rather {question.optionOne.text} or {question.optionTwo.text}?
      </Link>
    );
  }
}

function mapStateToProps({ questions }, { id }) {
  const question = questions[id];
  return { question };
}

export default connect(mapStateToProps)(PollsBoardEntry);
