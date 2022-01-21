import React, { Component } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";

class LeaderboardEntry extends Component {
  render() {
    const { user, rank } = this.props;
    return (
      <div className="leaderboard-entry">
        {rank <= 3 ? (
          <FontAwesomeIcon
            icon={faTrophy}
            className={
              "rank " +
              (rank === 1
                ? "first"
                : rank === 2
                ? "second"
                : rank === 3
                ? "third"
                : "")
            }
          />
        ) : (
          <p className="rank">{rank}</p>
        )}
        <div className="leaderboard-info">
          <p className="name">
            <img
              className="avatar"
              src={user.avatarURL}
              alt={`Avatar of user ${user.id}`}
            />

            {user.id}
          </p>
          <p>Asked: {user.questions.length}</p>
          <p>Answered: {Object.keys(user.answers).length}</p>
        </div>
        <div className="leaderboard-total">
          <span>
            {" "}
            Total:
            {" " + user.questions.length + Object.keys(user.answers).length}
          </span>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ users }, { id, rank }) {
  const user = users[id];
  return { user, rank };
}

export default connect(mapStateToProps)(LeaderboardEntry);
