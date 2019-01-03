import React, { Component } from "react";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-lg-4">
            <p>Clicky Game</p>
          </div>
          <div className="col-lg-4">
            <p className="message">{this.props.data.message}</p>
          </div>
          <div className="col-lg-4">
            <p>Score: {this.props.data.score}</p>
            <p>High Score: {this.props.data.highScore}</p>
          </div>
        </nav>
        <div>
          <p>Rules and stuff</p>
        </div>
      </div>
    );
  }
}

export default Navbar;
