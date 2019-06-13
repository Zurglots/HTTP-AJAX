import React, { Component } from "react";
import { Route } from "react-router-dom";
import FriendsList from "./FriendsList";
import axios from "axios";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        this.setState(() => ({ friends: response.data }));
        console.log(this.state.friends);
      })
      .catch(error => {
        console.error("Server Error", error);
      });
  }

  addFriend = friend => {
    axios
      .post("http://localhost:5000/friends", friend)
      .then(response => {
        this.setState({
          friends: response.data
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    // console.log(this.state.friends);
    return (
      <div className="friend-list">
        <Route
          exact
          path="/"
          render={props => (
            <FriendsList
              {...props}
              friends={this.state.friends}
              addFriend={this.addFriend}
            />
          )}
        />
        {/* <Route
          exact
          path="/"
          render={props => <FriendsList {...props} friends={this.state.data} />}
        /> */}
      </div>
    );
  }
}
