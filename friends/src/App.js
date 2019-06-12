import React, { Component } from "react";
import "./App.css";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        this.setState(() => ({ data: response.data }));
        console.log(this.state.data);
      })
      .catch(error => {
        console.error("Server Error", error);
      });
  }

  render() {
    // console.log(this.state.friends);
    return <div>A div</div>;
  }
}

export default App;
