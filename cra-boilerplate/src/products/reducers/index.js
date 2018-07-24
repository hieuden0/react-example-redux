import { combineReducers } from 'redux';

// import your Home Module reducers here and combine them
// Placed in same directory
import action from './applyActions'

const products = combineReducers({
	action
});

export default products;