import React, { Component } from 'react'
import SearchResult from './SearchResult/SearchResult'
import axios from 'axios'
import classes from './SearchResults.css'
class SearchResults extends Component {

    state = {
        results: []
    }

    componentDidMount() {
        axios.get('http://itunes.apple.com/search?term='+this.props.name+'&limit='+this.props.number)
            .then(response => {
                console.log(response.data)
                this.setState({ results: response.data.results })
                console.log(this.state.results);
            }).catch(error=>{
                console.log(error);
            })
    }



    render=()=> {
        console.log(this.state.results);
        const results = this.state.results.map(result => {
            return (<SearchResult key={result.trackId}
                artistName={result.artistName}
                trackName={result.trackName}
                longDescription = {result.shortDescription}
                artwork = {result.artworkUrl30} />)
        })
        return (<div>
          <div className={classes.Header}><h3>Search Results for "{this.props.name}".  <span> <a onClick={this.props.searchRevoke } className={classes.Clear}>(Clear)</a> </span></h3></div>
            {results}
        </div>);
    }

}

export default SearchResults;