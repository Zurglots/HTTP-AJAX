import React, { Component } from "react";

class Friend extends Component {
  state = {
    name: "",
    age: "",
    email: ""
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props) {
      this.setState({
        friend: this.props.friends.filter(
          person => person.id === props.match.params.id
        )
      });
    }
  }

  render() {
    return <div />;
  }
}

export default Friend;
