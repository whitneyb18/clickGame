import React, { Component } from "react";
import Navbar from "./components/Navbar.js";
import Cards from "./components/Cards";
import memCards from "./cards.json";
import "./App.css";

class App extends Component {
  state = {
    memCards,
    score: 0,
    highScore: 0,
    message: "Click a Poke'mon to Begin!",
    clicked: "false"
  };
  shuffle = array => {
    for (var i = array.length - 1; i > 0; i--) {
      var random = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[random];
      array[random] = temp;
    }
    return array;
  };

  handleClick = event => {
    if (event.target.attributes.clicked.value === "false") {
      var highScore = this.state.highScore;
      var newScore = this.state.score + 1;
      console.log(
        this.state.memCards[event.target.attributes.id.value].clicked
      );
      console.log(event.target.attributes.id.value);
      event.target.attributes.clicked.value = "true";
      if (newScore >= highScore) {
        this.setState({ highScore: newScore });
      }
      this.setState({
        message: "You caught " + event.target.attributes.alt.value + "!",
        score: newScore
      });
      let newChars = this.shuffle(this.state.memCards);

      this.setState({
        characters: newChars
      });
    } else {
      alert("game over");
      this.setState({
        score: 0,
        message: "Click on a Poke'mon to Begin!"
      });
    }
  };

  render() {
    return (
      <div>
        <Navbar data={this.state} />
        <div className="container">
          <h4>rules and stuff</h4>
          <div className="row">
            {this.state.memCards.map(memCard => (
              <Cards
                key={memCard.id}
                id={memCard.id}
                name={memCard.name}
                src={memCard.image}
                clicked={this.state.clicked}
                onClick={this.handleClick}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
