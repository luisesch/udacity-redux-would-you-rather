import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading";
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
    const { loading, loggedOut } = this.props;
    return (
      <Fragment>
        <LoadingBar />
        <div>
          {loading ? null : loggedOut ? (
            <Login />
          ) : (
            <Router>
              {/* <LoadingBar/> */}
              <Nav />
              <Route path="/" exact component={PollsBoard}></Route>
              <Route
                path="/questions/:question_id"
                component={PollPage}
              ></Route>
              <Route path="/add" component={NewPoll}></Route>
              <Route path="/leaderboard" component={Leaderboard}></Route>
            </Router>
          )}
        </div>
      </Fragment>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loggedOut: authedUser === "",
    loading: authedUser === null,
  };
}

export default connect(mapStateToProps)(App);
