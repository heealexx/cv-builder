import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      general: {
        firstName : "",
        lastName : "",
        phone : -1,
        email : ""
      },
      education: {
        name: "",
        major: "",
        start: "",
        end: ""
      },

    };
  }

  render() {
    return <div>Hello World</div>;
  }
}

export default App;
