import React, { Component } from "react";
import { connect } from "react-redux";

class Poll extends Component {
  render() {
    return <h1>Poll</h1>;
  }
}

function mapStateToProps({ questions }, { id }) {
  const question = questions[id];
  return { question };
}

export default connect(mapStateToProps)(Poll);
