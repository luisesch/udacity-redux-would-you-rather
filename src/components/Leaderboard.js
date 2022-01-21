import React, { Component } from "react";
import { connect } from "react-redux";

import LeaderboardEntry from "./LeaderboardEntry";

class PollsBoard extends Component {
  render() {
    const { userIds } = this.props;
    return (
      <div>
        <h1>Leaderboard</h1>
        <div className="container-content">
          <ul>
            {userIds.map((id, index) => (
              <LeaderboardEntry key={id} id={id} rank={index + 1} />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    userIds: Object.keys(users).sort(
      (a, b) =>
        Object.keys(users[b].answers).length +
        users[b].questions.length -
        (Object.keys(users[a].answers).length + users[a].questions.length)
    ),
  };
}

export default connect(mapStateToProps)(PollsBoard);
