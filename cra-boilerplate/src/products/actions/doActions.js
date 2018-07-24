import {
	REQUEST_START,
	REQUEST_SUCCESS,
  REQUEST_FAILED
} from './actionTypes'

// start request
export function doAction(payload) {
  return {
    type: REQUEST_START,
    payload
  };
}

// on successful
export function doActionFulfilled(payload) {
  return {
    type: REQUEST_SUCCESS,
    payload
  };
}

// on fail
export function doActionFailed(payload) {
  return {
    type: REQUEST_FAILED,
    payload
  };
}