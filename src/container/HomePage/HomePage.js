import React, { Component } from "react";
import { connect } from "react-redux";
//import Search from "../Search/Search";
import FilmDetails from "../../components/FilmDetails/FilmDetails";
import CharacterDetails from "../../components/CharacterDetails/CharacterDetails";
import { fetchCharacters, fetchFilms } from '../../actions';
import logo from "../../assets/logo.gif";


class HomePage extends Component {
  componentDidMount() {
    this.props.fetchCharacters();
  };

  render() {
    // console.log('HOME PAGE', filmD)
    if (this.props.films.films) {
      this.props.films.films.map(f => console.log("HII", f));
    }
    return (
      <div className="Home">
        <img className="image" src={logo} alt="Star Wars: React App" />

        {this.props.films.click ? (
          <FilmDetails 
          films = {this.props.films.films} 
          fetchFilms = { this.props.fetchFilms }
          />
        ) : (
          <CharacterDetails
          characters = {this.props.characters}
          fetchFilms = {this.props.fetchFilms}
        />
        )}

        {
          this.props.films.films&&this.props.films.films[0].data === "Bad Data"&&
          console.log("%cDATA was bad","color:orange;size:21;")
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return({
  films: state.films,
  characters: state.characters.augData
})};

export default connect(mapStateToProps, { fetchCharacters, fetchFilms })(HomePage);
