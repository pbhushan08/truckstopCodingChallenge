import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCharacters } from '../../actions/Characters';
import SearchInput from '../../components/SearchInput/SearchInput';
import SearchResults from '../../components/SearchResults';

class Search extends Component {
    componentDidMount() {
        this.props.fetchCharacters();
    }
    render() {
        return (
            <div>
                <h1>Star Wars </h1>
                <SearchInput />
                <SearchResults 
                    characters = {this.props.characters}
                />
            </div>
        )
    }
};

const mapStateToProps = state => ({
    characters: state.characters

});

export default connect( mapStateToProps, { fetchCharacters })(Search);
