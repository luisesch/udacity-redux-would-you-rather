import React, { Component } from "react";
import { connect } from "react-redux";

class NewPoll extends Component {
  render() {
    return <div>New Poll</div>;
  }
}

// function mapStateToProps({ questions }, { id }) {
//   const question = questions[id];
//   return { question };
// }

export default connect()(NewPoll);
