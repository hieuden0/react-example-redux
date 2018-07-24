import {
    REQUEST_START,
    REQUEST_SUCCESS,
    REQUEST_FAILED
  } from '../actions/actionTypes';
  
  let initialState = {
    repos: [],
    isLoading: false,
    errors: []
  };
  function applyAction(state = initialState, action) {
  
    switch (action.type) {
      case REQUEST_START:
        return Object.assign({}, state, {
          isLoading: true
        });
  
      case REQUEST_FAILED:
        return Object.assign({}, state, {
          isLoading: false,
          errors: action.payload
        });
  
      case REQUEST_SUCCESS:
        return Object.assign({}, state, {
          isLoading: false,
          repos: action.payload.value
        });
  
      default:
        return state;
    }
  }
  
  export default applyAction;
  