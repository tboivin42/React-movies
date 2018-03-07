import { LOAD_MOVIES, ADD_YOUTUBE_KEY_TO_CURRENT, UPDATE_MOVIE_LIST, UPDATE_RECOMMENDATIONS } from "../actions";

const movies = (state = {}, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case LOAD_MOVIES: 
      return { 
        ...state,
        moviesList: payload.slice(1, 6),
        currentMovie: payload[0]
      };
    case ADD_YOUTUBE_KEY_TO_CURRENT:
      return {
        ...state,
        currentMovie: { ...state.currentMovie, video: payload},
      }
      case UPDATE_MOVIE_LIST:
        return {
          ...state,
          currentMovie: payload,
        }
      case UPDATE_RECOMMENDATIONS:
        return {
          ...state,
          moviesList: payload.slice(1, 6),
        }
    default:
      return state;
  }
}

export default movies;
