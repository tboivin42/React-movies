import React from 'react';
import axios from 'axios';
import VideoList from './Video-list';
import VideoDetail from '../Components/Video-details';
import SearchBar from '../Components/Search-bar';

const API_END_POINT = "https://api.themoviedb.org/3/";
const POPULAR_MOVIES_URL = "discover/movie?language=fr&sort_by=popularity.desc&include_adult=false&append_to_response=images";
const API_KEY = "api_key=c54a42a9a49a29240ec7bdc964c87f1c";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      moviesList: {},
      currentMovie: {}
      }
  }

  componentWillMount() {
    this.initMovies();
  }

  initMovies() {
    axios.get(`${API_END_POINT}${ POPULAR_MOVIES_URL}&${API_KEY}`).then(function(response){
      this.setState({moviesList: response.data.results.slice(1, 6), currentMovie: response.data.results[0]});
    }.bind(this));
  }
  
  render(){

    const checkMoviesList = () => { 
      if (this.state.moviesList.length >= 5) {
        return <VideoList moviesList={ this.state.moviesList }/>
      }
    }

    return (
      <div>
        <SearchBar />
        { checkMoviesList() }
        <VideoDetail title={ this.state.currentMovie.title } description={this.state.currentMovie.overview} />
      </div>
      )
    }
  }

export default App;