import React, { Component } from "react";
import { connect } from "react-redux";
import PollsBoardEntry from "./PollsBoardEntry";
import { POLLTABS } from "../utils/CONSTANTS";

class PollsBoard extends Component {
  state = {
    openTab: "notAnswered",
  };

  handleTabChange = (e) => {
    const openTab = e.target.value;
    this.setState(() => ({
      openTab,
    }));
  };

  render() {
    const { userDetails, questionIds } = this.props;

    function hasUserAnswered(questionId, answered) {
      return userDetails.answers.hasOwnProperty(questionId) === answered;
    }

    return (
      <div>
        <h1>Polls</h1>
        <ul className="tabview-header" role="tablist">
          {POLLTABS.map((tab) => (
            <button
              key={tab.value}
              className="tabview-item"
              type="button"
              role="tab"
              aria-selected={
                this.state.openTab === tab.value ? "true" : "false"
              }
              onClick={this.handleTabChange}
              value={tab.value}
            >
              {tab.title}
            </button>
          ))}
        </ul>
        <div className="tabview-body">
          {POLLTABS.map(
            (tab) =>
              this.state.openTab === tab.value && (
                <ul key={tab.value}>
                  {questionIds
                    .filter((id) => hasUserAnswered(id, tab.answered))
                    .map((id) => (
                      <PollsBoardEntry key={id} id={id} />
                    ))}
                </ul>
              )
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ questions, authedUser, users }) {
  return {
    userDetails: users[authedUser],
    questionIds: Object.keys(questions).sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    ),
  };
}

export default connect(mapStateToProps)(PollsBoard);
