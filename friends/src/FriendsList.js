import React, { Component } from "react";
import axios from "axios";

export default class FriendsList extends Component {
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

  render() {
    return (
      <div className="friendTable">
        {this.state.friends.map(friend => (
          <FriendDetails friend={friend} />
        ))}
      </div>
    );
  }
}

function FriendDetails({ friend }) {
  const { name, age, email } = friend;
  return (
    <div>
      <div>Name: {name}</div>
      <div>Age: {age}</div>
      <div>Email: {email}</div>
    </div>
  );
}
