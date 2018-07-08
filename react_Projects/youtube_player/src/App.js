import React, { Component } from 'react';
import _ from 'lodash'
import './App.css';
import SearchBar from './components/SearchBar/searchBar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/videoList/videoList'
import videoList from './components/videoList/videoList';
import VideoDetail from './components/videoDetail/videoDetail'
const API_KEY = 'AIzaSyD6oC4OtpzooS6uD5Iny1c76UABt4rYc1g';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo:null
    };
    this.videoSearch('yolo')
  }

  

   videoSearch =(term) =>{
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      this.setState({
        videos:videos,
      selectedVideo:videos[0]});
      
    });
  
  }

  render() {
    const videoSearch = _.debounce((term)=>{ this.videoSearch(term)},300) 
    
    return (
      <div className="App">
        <SearchBar onSearchTermChange = {videoSearch}/>
           <VideoDetail   video={this.state.selectedVideo}/>
        <VideoList 
        onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
        videos={this.state.videos}/>
      </div>
    );
  }
}

export default App;
