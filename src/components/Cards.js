import React, { Component } from "react";
import "./Cards.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
class Cards extends Component {
  render() {
    return (
      <div className="cardContainer">
        <div className="col-sm-3">
          <button className="btn pokeButton">
            <img
              className="memCard"
              src={this.props.src}
              alt={this.props.name}
              id={this.props.id}
              clicked={this.props.clicked}
              onClick={this.props.onClick}
            />
          </button>
        </div>
      </div>
    );
  }
}

export default Cards;
