import { combineEpics } from 'redux-observable';

// Import epics and combine
import home from './home/epics';
import products from './products/epics';


const rootEpic = combineEpics(
	home,
	products
);

export default rootEpic