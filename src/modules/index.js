import { combineReducers } from 'redux'
import { fetchedItems, fetchHasErrored, fetchLoading, birthdayResponse } from './fetchReducer';
import { dateReducer } from './dateReducer';
export default combineReducers({
  fetchedItems,
  fetchHasErrored,
  fetchLoading,
  dateReducer,
  birthdayResponse
})
