import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";

import Nav from "./Nav";
import PollsBoard from "./PollsBoard";
import NewPoll from "./NewPoll";

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
            <Route path="/add" component={NewPoll}></Route>
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
