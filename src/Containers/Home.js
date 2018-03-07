import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import VideoList from './Video-list';
import VideoDetail from '../Components/Video-details';
import SearchBar from '../Components/Search-bar';
import Video from '../Components/Video';
import Navbar from '../Components/Navbar';
import { loadMovies, updateYoutubeId, updateCurrentMovie, updateRecommendations } from '../actions';

const API_END_POINT = "https://api.themoviedb.org/3/";
const POPULAR_MOVIES_URL = "discover/movie?language=fr&sort_by=popularity.desc&include_adult=false&append_to_response=images";
const API_KEY = "api_key=c54a42a9a49a29240ec7bdc964c87f1c";
const SEARCH_URL = "search/movie?language=fr&include_adult=false";
const UPCOMING_MOVIES = "movie/upcoming?api_key=c54a42a9a49a29240ec7bdc964c87f1c&language=fr&region=fr&adult=false";

class Home extends Component {
  
  constructor(props) {
    super(props);
    
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      moviesList: {},
      currentMovie: {},
    }
  }
  
  // componentWillReceiveProps(nextProps) {
    //   if (nextProps == this.props) return ;
    //  const { updateYoutubeId, currentMovie } = nextProps;
    // console.log('componeunt will mount', this.props, nextProps);
    //  updateYoutubeId(currentMovie.id);
    // }
    
    onClickListItem(movie) {
      const { updateCurrentMovie, updateRecommendations } = this.props;
      updateCurrentMovie(movie)
      updateRecommendations(movie.id)
    }

    onClickSearch(searchText) {
      console.log(searchText);

      // if (searchText) {
      //   axios.get(`${API_END_POINT}${SEARCH_URL }&${API_KEY}&query=${searchText}`).then(function(response) {
      //     if (response.data && response.data.results[0]) {
      //       if (response.data.results[0].id !== this.state.currentMovie.id) {
      //         this.setState({
      //           currentMovie: response.data.results[0]}, (response) => {
      //             // this.applyVideoToCurrentMovie();
      //             this.changeMovieList();      
      //           })
      //         }
      //       }
      //     }.bind(this));
      //   }
      }
      
      toggle() {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen
        });
      };
      
      
      render(){

        const { movies, currentMovie, updateYoutubeId } = this.props;
        if (currentMovie && currentMovie.video === false)
          updateYoutubeId(currentMovie.id);
        if (!currentMovie || !movies) return false;
        const checkMoviesList = () => {
          if (movies.length === 5) {
            return <VideoList moviesList={ movies } callback={this.onClickListItem.bind(this)} />
          }
        }
        const renderVideo = () => {
          if (currentMovie.video) {
            return (
              <div>
            <Video videoId={currentMovie.video} />
            <VideoDetail title={ currentMovie.title } description={currentMovie.overview} />
          </div>
        );
      } else {
        return <div>Pas de donées</div>
      }
    }
    
    return (
      <div>
        <div className="search_bar">
          <SearchBar callback={this.onClickSearch.bind(this)} />
        </div>
        <div className="row">
          <div className="col-md-8">
            { renderVideo() }
          </div>
          <div className="col-md-4">
            { checkMoviesList() }
          </div>
        </div>
      </div>
      )
    }
  }

// const mapDispatchToProps = dispatch => bindActionCreators(ations, dispatch);
const mapDispatchToProps = {
  loadMovies,
  updateYoutubeId,
  updateCurrentMovie,
  updateRecommendations,
} 
// bindActionCreators(ations, dispatch);

const mapStateToProps = (state) => ({
  movies: state.movies.moviesList,
  currentMovie: state.movies.currentMovie,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

// USER => ACTION => REDUCER => STORE =>? (state updated) => USER ...
// USER => updateCurrentMovie(movie) => (currentMovie = movie) =? AUTOMATIC      