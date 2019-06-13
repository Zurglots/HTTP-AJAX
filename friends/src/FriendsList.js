import React, { Component } from "react";
import FriendDetails from "./FriendDetails";

export default class FriendsList extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="myFriends">
          {this.props.friends.map(friend => (
            <FriendDetails key={friend.id} friend={friend} />
          ))}
        </div>
        <div>
          <form>
            <label for="newfriend">Add your friends!</label>
            <input id="newfriend" />
            <input id="newfriend" />
            <input id="newfriend" />
          </form>
        </div>
      </div>
    );
  }
}
