import React from "react";
import { Link, withRouter } from "react-router-dom";

const Nav = props => {
  console.log(props);
  return (
    <div>
      {props.location.pathname === "/add-friend" ? (
        <Link to="/">Back</Link>
      ) : (
        <Link to="/add-friend">Add Friend</Link>
      )}
    </div>
  );
};

export default withRouter(Nav);
