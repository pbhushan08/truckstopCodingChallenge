import React, { Component } from "react";
import { connect } from "react-redux";

import FilmDetails from "../../components/FilmDetails/FilmDetails";
import CharacterDetails from "../../components/CharacterDetails/CharacterDetails";
import ErrorDisplay from "../../components/ErrorDisplay/ErrorDisplay";
import { fetchCharacters, fetchFilms } from "../../actions";
import logo from "../../assets/logo.gif";

//The Main Container
class HomePage extends Component {
  componentDidMount() {
    this.props.fetchCharacters();
  }

  render() {
    //console.log("HOME PAGE", this.props.films.click);
    //console.log("HOME PAGE", this.props.films.id);

    let display = null;
    if (this.props.films.click === "Character") {
      display = (
        <div>
          <CharacterDetails
            characters={this.props.characters}
            fetchFilms={this.props.fetchFilms}
          />
        </div>
      );
    } else if (this.props.films.click === "Films") {
      display = (
        <div>
          <FilmDetails
            films={this.props.films.films}
            fetchFilms={this.props.fetchFilms}
            id={this.props.films.id}
          />
        </div>
      );
    } else if (this.props.films.click === "Error") {
      display = (
        <div>
          <ErrorDisplay
            fetchFilms={this.props.fetchFilms}
            id={this.props.films.id}
          />
        </div>
      );
    }

    return (
      <div className="Home">
        <img className="image" 
         src={logo} 
         alt="Star Wars: React App" 
         />
        <div>{display}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  //console.log("HOME state", state);
  return {
    films: state.films,
    characters: state.characters.augData
  };
};

export default connect(
  mapStateToProps,
  {
    fetchCharacters,
    fetchFilms
  }
)(HomePage);
