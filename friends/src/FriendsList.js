import React, { Component } from "react";
import FriendDetails from "./FriendDetails";

export default class FriendsList extends Component {
  state = {
    friend: {
      name: "",
      age: "",
      email: ""
    }
  };

  changeHandler = e => {
    e.persist();
    // const value = e.target.value;
    this.setState({
      friend: {
        ...this.state.friend,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.friend);
    this.props.addFriend(this.state.friend);
    this.setState({
      friend: {
        name: "",
        age: "",
        email: ""
      }
    });
  };

  render() {
    return (
      <div>
        <div className="myFriends">
          {this.props.friends.map(friend => (
            <FriendDetails key={friend.id} friend={friend} />
          ))}
        </div>
        <div>
          <form onSubmit={this.handleSubmit}>
            {/* <label htmlFor="newfriend">Add your friends!</label> */}
            <input
              type="text"
              name="name"
              onChange={this.changeHandler}
              value={this.state.friend.name}
              placeholder="Name"
            />
            <input
              type="text"
              name="age"
              onChange={this.changeHandler}
              value={this.state.friend.age}
              placeholder="Age"
            />
            <input
              type="text"
              name="email"
              onChange={this.changeHandler}
              value={this.state.friend.email}
              placeholder="Email"
            />
            <button>Add Friend!</button>
          </form>
        </div>
      </div>
    );
  }
}
