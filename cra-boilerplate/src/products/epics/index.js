import { combineEpics } from 'redux-observable';

// import your Home Module epics here and combine them
// Place all epics in same directory
import fetchAction from './fetchAction'

const products = combineEpics(
	fetchAction
);

export default products