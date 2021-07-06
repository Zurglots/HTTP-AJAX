import React, { Component } from "react";

export default class FriendForm extends Component {
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
    this.props.history.push("/");
  };

  render() {
    return (
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
    );
  }
}
