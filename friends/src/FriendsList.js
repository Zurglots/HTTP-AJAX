import React from "react";
import FriendDetails from "./FriendDetails";

const FriendsList = props => {
  return (
    <div className="myFriends">
      {props.friends.map(friend => (
        <FriendDetails key={friend.id} friend={friend} />
      ))}
    </div>
  );
};

export default FriendsList;
