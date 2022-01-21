import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAddQuestion } from "../actions/questions";
import { Redirect } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";

class NewPoll extends Component {
  state = {
    textOptionOne: "",
    textOptionTwo: "",
    toHome: false,
  };

  handleChange = (e) => {
    const text = e.target.value;
    const name = e.target.name;
    this.setState({ ...this.state, [name]: text });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { textOptionOne, textOptionTwo } = this.state;
    const { dispatch } = this.props;
    dispatch(handleAddQuestion(textOptionOne, textOptionTwo));
    this.setState(() => ({
      textOptionOne: "",
      textOptionTwo: "",
      toHome: true,
    }));
  };

  render() {
    const { textOptionOne, textOptionTwo, toHome } = this.state;

    if (toHome === true) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <h1>Add a new poll</h1>
        <div className="container-content container-add">
          <form onSubmit={this.handleSubmit}>
            <p>Would you rather...</p>
            <textarea
              name="textOptionOne"
              className="input-option"
              placeholder="Enter option 1"
              value={textOptionOne}
              onChange={this.handleChange}
              maxLength={200}
            ></textarea>
            <p>or</p>
            <textarea
              name="textOptionTwo"
              className="input-option"
              placeholder="Enter option 2"
              value={textOptionTwo}
              onChange={this.handleChange}
              maxLength={200}
            ></textarea>
            <button
              className="button"
              type="submit"
              disabled={textOptionOne === "" || textOptionTwo === ""}
            >
              SUBMIT
            </button>
          </form>
          <div className="container-icon">
            <FontAwesomeIcon icon={faQuestion} width={"100%"} />
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(NewPoll);
