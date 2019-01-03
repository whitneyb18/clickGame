import React, { Component } from "react";
import Navbar from "./components/Navbar.js";
import Cards from "./components/Cards";
import Rules from "./components/Rules";
import memCards from "./cards.json";
import "./App.css";

class App extends Component {
  state = {
    memCards: memCards,
    score: 0,
    highScore: 0,
    message: "Click a Poke'mon to Begin!"
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
    let pokemon = this.state.memCards;
    let thisClickedValue = event.target.attributes.id.value;
    let result = pokemon.filter(card => card.id === thisClickedValue);
    console.log(result, "Result");
    let index = pokemon.findIndex(x => x.id === result[0].id);
    console.log(this.state.memCards[index]);
    // this.setState({memCards[0].clicked: "true"});
    if (pokemon[index].clicked === "false") {
      var highScore = this.state.highScore;
      var newScore = this.state.score + 1;
      var clickedTrue = (pokemon[index].clicked = "true");
      if (newScore >= highScore) {
        this.setState({ highScore: newScore });
      }
      this.setState({
        message: "You caught " + event.target.attributes.alt.value + "!",
        score: newScore
      });
      let newChars = this.shuffle(pokemon);

      this.setState({
        memCards: newChars
      });
      this.setState({ clicked: clickedTrue });
      console.log(this.state.memCards);
    } else {
      this.setState({
        score: 0,
        message: "Game Over: Click on a Poke'mon to play again!",
        memCards: [
          {
            id: "1",
            name: "Squirtle",
            image:
              "https://static.giantbomb.com/uploads/scale_small/13/135472/1891764-007squirtle.png",
            clicked: "false"
          },
          {
            id: "2",
            name: "Charmander",
            image:
              "https://static.giantbomb.com/uploads/scale_small/0/6087/2438704-1202149925_t.png",
            clicked: "false"
          },
          {
            id: "3",
            name: "Pikachu",
            image:
              "https://www.hunted.com/blog/wp-content/uploads/2016/07/Pikachu.png",
            clicked: "false"
          },
          {
            id: "4",
            name: "Vaporeon",
            image:
              "https://assets.pokemon.com/assets/cms2/img/pokedex/full//134.png",
            clicked: "false"
          },
          {
            id: "5",
            name: "Bulbasaur",
            image:
              "https://static.giantbomb.com/uploads/scale_small/13/135472/1891758-001bulbasaur.png",
            clicked: "false"
          },
          {
            id: "6",
            name: "Togepi",
            image:
              "https://cdn.bulbagarden.net/upload/thumb/6/6b/175Togepi.png/250px-175Togepi.png",
            clicked: "false"
          },
          {
            id: "7",
            name: "Magikarp",
            image:
              "https://cdn.bulbagarden.net/upload/thumb/0/02/129Magikarp.png/250px-129Magikarp.png",
            clicked: "false"
          },
          {
            id: "8",
            name: "Pidgey",
            image:
              "https://cdn.bulbagarden.net/upload/thumb/5/55/016Pidgey.png/250px-016Pidgey.png",
            clicked: "false"
          },
          {
            id: "9",
            name: "Articuno",
            image:
              "https://cdn.bulbagarden.net/upload/thumb/4/4e/144Articuno.png/250px-144Articuno.png",
            clicked: "false"
          },
          {
            id: "10",
            name: "Jigglypuff",
            image:
              "https://cdn.bulbagarden.net/upload/thumb/3/3e/039Jigglypuff.png/250px-039Jigglypuff.png",
            clicked: "false"
          },
          {
            id: "11",
            name: "Oddish",
            image:
              "https://static.pokemonpets.com/images/monsters-images-300-300/43-Oddish.png",
            clicked: "false"
          },
          {
            id: "12",
            name: "Snorlax",
            image:
              "https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png",
            clicked: "false"
          }
        ]
      });
    }
  };

  render() {
    return (
      <div>
        <Navbar data={this.state} />
        <Rules />
        <div className="container">
          <div className="row">
            {this.state.memCards.map(memCard => (
              <Cards
                key={memCard.id}
                id={memCard.id}
                name={memCard.name}
                src={memCard.image}
                clicked={memCard.clicked}
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
