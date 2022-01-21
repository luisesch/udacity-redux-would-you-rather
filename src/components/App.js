import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";

import Login from "./Login";
import Nav from "./Nav";
import PollsBoard from "./PollsBoard";
import PollPage from "./PollPage";
import NewPoll from "./NewPoll";
import Leaderboard from "./Leaderboard";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <div>
        {this.props.authedUser === null ? (
          <Login />
        ) : (
          <Router>
            {/* <LoadingBar/> */}
            <Nav />
            <Route path="/" exact component={PollsBoard}></Route>
            <Route path="/questions/:question_id" component={PollPage}></Route>
            <Route path="/add" component={NewPoll}></Route>
            <Route path="/leaderboard" component={Leaderboard}></Route>
          </Router>
        )}
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(App);
