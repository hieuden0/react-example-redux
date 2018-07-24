import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// import your Module reducers here and combine them
import home from './home/reducers'
import products from './products/reducers'

const rootReducer = combineReducers({
	home,
	products,
	router: routerReducer
});

export default rootReducer;