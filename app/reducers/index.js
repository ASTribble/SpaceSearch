import { combineReducers } from 'redux';
import {
  SET_SEARCH_TERM,
  SEARCH_SPACE_REQUEST,
  SEARCH_SPACE_SUCCESS,
  SEARCH_SPACE_ERROR
} from '../actions/index';

const searchState = {
  searchResults: [],
  searchTerm: null,
  loading: false,
  err: null
}

const searchReducer = (state = searchState, action) => {
  switch (action.type) {

    case SET_SEARCH_TERM:
      return { ...state, searchTerm: action.text };

    case SEARCH_SPACE_REQUEST:
      return { ...state, loading: true };

    case SEARCH_SPACE_SUCCESS:
      const searchResults = action.spaceItems.map(item => ({
        title: item.data[0].title,
        thumbnail: item.links[0].href,
        nasa_id: item.data[0].nasa_id,
        description: item.data[0].description,
        date_created: item.data[0].date_created
      }));
      return { ...state, loading: false, err: null, searchResults };
    
    case SEARCH_SPACE_ERROR:
      return {...state, loading: false, err: action.err}; 

    default:
    return state;
  }
}

const rootReducer = combineReducers({
  searchReducer
});

export default rootReducer;