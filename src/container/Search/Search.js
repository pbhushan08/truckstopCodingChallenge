import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCharacters, setCharacter } from '../../actions';
import SearchInput from '../../components/SearchInput/SearchInput';
import SearchResults from '../../components/SearchResults/SearchResults';

class Search extends Component {
    componentDidMount() {
        this.props.fetchCharacters();
    }
    
    render() {
        console.log('SEARCH COMPONENT',this.props.characters);
        return (
            <div>
                <h1>Star Wars </h1>
                <SearchInput />
                <SearchResults 
                    characters = { this.props.characters }
                    setCharacter = { this.props.setCharacter }
                />
            </div>
        )
    }
};

const mapStateToProps = state => ({
    characters: state.characters.augData

});

export default connect( mapStateToProps, { fetchCharacters, setCharacter })(Search);
