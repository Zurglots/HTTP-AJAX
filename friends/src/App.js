import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import axios from "axios";

import Nav from "./Nav";
import FriendsList from "./FriendsList";
// import Friend from "./Friend";
import FriendForm from "./FriendForm";

import "./App.css";

class App extends Component {
  state = {
    friends: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => {
        this.setState({ friends: res.data });
        console.log(this.state.friends);
      })
      .catch(error => {
        console.error("Server Error", error);
      });
  }

  addFriend = friend => {
    axios
      .post("http://localhost:5000/friends", friend)
      .then(res => {
        this.setState({
          friends: res.data
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    console.log(this.props);
    return (
      <div className="friend-list">
        <Nav />
        <Route
          exact
          path="/"
          render={props => (
            <FriendsList {...props} friends={this.state.friends} />
          )}
        />
        <Route
          exact
          path="/add-friend"
          render={props => <FriendForm {...props} addFriend={this.addFriend} />}
        />
        {/* <Route
          exact
          path="/add-friend/:id"
          render={props => <Friend {...props} friends={this.state.friends} />}
        /> */}
        {/* <Route
          exact
          path="/"
          render={props => <FriendsList {...props} friends={this.state.data} />}
        /> */}
      </div>
    );
  }
}

export default withRouter(App);
