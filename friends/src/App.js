import React, { Component } from "react";
import { Route } from "react-router-dom";
import FriendsList from "./FriendsList";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  render() {
    // console.log(this.state.friends);
    return (
      <div className="friend-list">
        <Route exact path="/" component={FriendsList} />
        {/* <Route
          exact
          path="/"
          render={props => <FriendsList {...props} friends={this.state.data} />}
        /> */}
      </div>
    );
  }
}
