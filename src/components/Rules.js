import React, { Component } from "react";
import "./Rules.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
class Rules extends Component {
  render() {
    return (
      <div className="rulesDiv">
        <img
          className="gottaCatch"
          src="https://vignette.wikia.nocookie.net/habitrpg/images/e/e9/Gotta_catch_them_all.png/revision/latest?cb=20150515175159"
          alt="Gotta Catch 'em"
        />
        <h3>
          Click on a Poke'mon to catch it. Don't catch the same Poke'mon twice!
        </h3>
      </div>
    );
  }
}

export default Rules;
