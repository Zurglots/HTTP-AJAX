import React from "react";

function FriendDetails(props) {
  const { name, age, email } = props.friend;
  return (
    <div>
      <div>Name: {name}</div>
      <div>Age: {age}</div>
      <div>Email: {email}</div>
    </div>
  );
}

export default FriendDetails;
