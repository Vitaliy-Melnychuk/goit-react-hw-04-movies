import React, { Component } from "react";

class HomePage extends Component {
  render() {
    return <h1>Hello it's head Page on Netlify</h1>;
  }
}

export default HomePage;

// [build]
//     publish = "build"
// [[redirects]]
//     from = "/*"
//     to = "/index.html"
//     status = 200