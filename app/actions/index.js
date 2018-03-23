
//============= Saving User Input Value ============

export const SET_SEARCH_TERM = 'SET_SEARCH_TERM';

export const setSearchTerm = (text) => ({
  type: SET_SEARCH_TERM,
  text
})

//========== Async Call Support ========================

export const FETCH_SPACE_REQUEST = 'FETCH_SPACE_REQUEST';
export const fetchSpaceRequest = () => ({
  type: FETCH_SPACE_REQUEST
});

export const FETCH_SPACE_SUCCESS = 'FETCH_SPACE_SUCCESS';
export const fetchSpaceSuccess = (spaceItems) => ({
  type: FETCH_SPACE_SUCCESS,
  spaceItems
});

export const FETCH_SPACE_ERROR = 'FETCH_SPACE_SUCCESS';
export const fetchSpaceError = (err) => ({
  type: FETCH_SPACE_ERROR,
  err
});



//================ Async Search Call ======================================

const convertSearchTerm = searchTerm => {
  return searchTerm.trim().toLowerCase().replace(' ', '%20');
}



export const fetchSpaceImages = searchTerm => dispatch => {
  dispatch(fetchSpaceRequest);
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
      return dispatch(fetchSpaceSuccess(spaceItems));
    })
    .catch(err => dispatch(fetchSpaceError(err)));
};