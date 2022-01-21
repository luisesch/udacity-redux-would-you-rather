import React, { Component } from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

class Nav extends Component {
  logout = () => {
    const { dispatch } = this.props;
    dispatch(setAuthedUser(""));
  };

  render() {
    const { authedUser } = this.props;
    return (
      <nav className="nav">
        <ul>
          <li className="nav-item">
            <NavLink to="/" exact activeClassName="active">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/add" activeClassName="active">
              New Poll
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/leaderboard" activeClassName="active">
              Leaderboard
            </NavLink>
          </li>
        </ul>
        <span className="user-info">
          Logged in as:
          <br />
          {authedUser}
        </span>
        <button className="btn-logout" onClick={this.logout}>
          <FontAwesomeIcon icon={faSignOutAlt} width={"100%"} />
        </button>
      </nav>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(Nav);
