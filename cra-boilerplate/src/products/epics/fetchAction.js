import { ajax } from 'rxjs/observable/dom/ajax';
import { ofType } from 'redux-observable';
import { catchError, mergeMap, map } from 'rxjs/operators';

import { REQUEST_START } from '../actions/actionTypes';

import { doActionFulfilled, doActionFailed } from '../actions/doActions';

// Also now using v6 pipe operators
const fetchAction = (action$, state$) =>
	action$.pipe(
		ofType(REQUEST_START),
		mergeMap(action => {
			let apiUrl = `http://localhost:52177/odata/Settings`;
			return ajax
				.getJSON(apiUrl)
				.pipe(
					map(response => doActionFulfilled(response)),
					catchError(error => doActionFailed(error.xhr.response))
				);
		})
	);

export default fetchAction;
