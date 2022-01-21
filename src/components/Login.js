import React, { Component } from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

class Login extends Component {
  state = {
    selectedUser: "",
  };

  handleChange = (e) => {
    this.setState({ selectedUser: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { selectedUser } = this.state;
    const { dispatch } = this.props;
    dispatch(setAuthedUser(selectedUser));
  };

  render() {
    const { selectedUser } = this.state;
    const { userIds } = this.props;

    return (
      <div>
        <h1>Login</h1>
        <div className="container-content container-with-img">
          <div className="container-icon">
            <FontAwesomeIcon icon={faUser} width={"100%"} />
          </div>
          <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
            <label for="users">
              Please select a user to log in and see the polls...
            </label>
            <select name="users" id="users" className="select">
              <option value="">Select a user</option>
              {userIds.map((user) => (
                <option value={user}>{user}</option>
              ))}
            </select>
            <button
              className="button"
              type="submit"
              disabled={selectedUser === ""}
            >
              LOGIN
            </button>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    userIds: Object.keys(users),
  };
}

export default connect(mapStateToProps)(Login);
