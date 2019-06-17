import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCharacters, setCharacter, fetchFilms } from '../../actions';
import SearchResults from '../../components/SearchResults/SearchResults';
import FilmDetails from '../../components/FilmDetails/FilmDetails';

class Search extends Component {
    componentDidMount() {
        this.props.fetchCharacters();
    }
    
    render() {
       // console.log('SEARCH COMPONENT',this.props.characters);
        console.log('FILMS SEARCH COMPONENT', this.props.films);
        return (
            <div>
                <SearchResults 
                    characters = { this.props.characters }
                    setCharacter = { this.props.setCharacter }
                    fetchFilms = { this.props.fetchFilms }
                />
                <FilmDetails 
                    setCharacterFilms = { this.props.setCharacterFilms }
                />
            </div>
        )
    }
};

const mapStateToProps = state => ({
    characters: state.characters.augData,
    films: state.films.films

});

export default connect( mapStateToProps, { fetchCharacters, setCharacter, fetchFilms })(Search);
