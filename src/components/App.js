import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";

import Nav from "./Nav";
import PollsBoard from "./PollsBoard";
import Poll from "./Poll";
import NewPoll from "./NewPoll";
import Leaderboard from "./Leaderboard";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <Router>
        {/* <LoadingBar/> */}
        <Nav />
        {this.props.loading === true ? null : (
          <div>
            <Route path="/" exact component={PollsBoard}></Route>
            <Route path="/questions/:question_id" component={Poll}></Route>
            <Route path="/add" component={NewPoll}></Route>
            <Route path="/leaderboard" component={Leaderboard}></Route>
          </div>
        )}
      </Router>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null,
  };
}

export default connect(mapStateToProps)(App);
