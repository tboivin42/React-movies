import axios from 'axios';

const API_END_POINT = "https://api.themoviedb.org/3/";
const POPULAR_MOVIES_URL = "discover/movie?language=fr&sort_by=popularity.desc&include_adult=false&append_to_response=images";
const API_KEY = "api_key=c54a42a9a49a29240ec7bdc964c87f1c";
const SEARCH_URL = "search/movie?language=fr&include_adult=false";
const UPCOMING_MOVIES = "movie/upcoming?api_key=c54a42a9a49a29240ec7bdc964c87f1c&language=fr&region=fr&adult=false";

export const LOAD_MOVIES = 'LOAD_MOVIES';
export const ADD_YOUTUBE_KEY_TO_CURRENT = 'ADD_YOUTUBE_KEY_TO_CURRENT';
export const UPDATE_MOVIE_LIST = 'UPDATE_MOVIE_LIST';
export const UPDATE_RECOMMENDATIONS = 'UPDATE_RECOMMENDATIONS';

export const load_movies = (movies) => ({ type: LOAD_MOVIES, payload: movies });
export const addYtKey = (id) => ({ type: ADD_YOUTUBE_KEY_TO_CURRENT, payload: id });
export const updateCurrentMovie = (movie) => ({ type: UPDATE_MOVIE_LIST, payload: movie });
export const updateRecommendationsPlain = (movies) => ({ type: UPDATE_RECOMMENDATIONS, payload: movies });

export const loadSearch = (searchText) => 
	dispatch =>
	axios.get(`${API_END_POINT}${SEARCH_URL }&${API_KEY}&query=${searchText}`)
	.then(({data: { results } }) => dispatch(updateCurrentMovie(results[0])))
	.then(({ payload }) => dispatch(updateRecommendations(payload.id)));


export const updateRecommendations = (id) =>
	dispatch => 
	axios.get(`${API_END_POINT}movie/${id}/recommendations?${API_KEY}&include_adult=false&language=fr`)
	.then(({ data: { results }}) => dispatch(updateRecommendationsPlain(results)));

export const loadMovies = () =>
 dispatch => 
 	axios.get(`${API_END_POINT}${POPULAR_MOVIES_URL}&${API_KEY}`)
	 	.then(({ data: { results }}) => dispatch(load_movies(results)));

export const updateYoutubeId = (id) => 
	dispatch => 
		axios.get(`${API_END_POINT}movie/${id}?${API_KEY}&append_to_response=videos&include_adult=false`)
			.then(({ data: { videos: { results } } }) => dispatch(addYtKey(results[0].key)))