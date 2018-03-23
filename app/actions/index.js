
//============= Saving User Input Value ============

export const SET_SEARCH_TERM = 'SET_SEARCH_TERM';

export const setSearchTerm = (text) => ({
  type: SET_SEARCH_TERM,
  text
})

//========== Async Call Support ========================

export const SEARCH_SPACE_REQUEST = 'SEARCH_SPACE_REQUEST';
export const searchSpaceRequest = () => ({
  type: SEARCH_SPACE_REQUEST
});

export const SEARCH_SPACE_SUCCESS = 'SEARCH_SPACE_SUCCESS';
export const searchSpaceSuccess = (spaceItems) => ({
  type: SEARCH_SPACE_SUCCESS,
  spaceItems
});

export const SEARCH_SPACE_ERROR = 'SEARCH_SPACE_SUCCESS';
export const searchSpaceError = (err) => ({
  type: SEARCH_SPACE_ERROR,
  err
});



//================ Async Search Call ======================================

const convertSearchTerm = searchTerm => {
  return searchTerm.trim().toLowerCase().replace(' ', '%20');
}



export const fetchSpaceImages = searchTerm => dispatch => {
  dispatch(searchSpaceRequest);
  return fetch(`https://images-api.nasa.gov/search?media_type=image&q=${convertSearchTerm(searchTerm)}`)
    .then(res => {
      if (!res.ok) {
        return Promise.reject('Something Went Wrong')
      }
      return res.json();
    })
    .then(res => {
      const spaceItems = res.collection.items;
      console.log(spaceItems);
      return dispatch(searchSpaceSuccess(spaceItems));
    })
    .catch(err => dispatch(searchSpaceError(err)));
};