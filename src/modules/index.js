import { combineReducers } from 'redux'
import { fetchedItems, fetchHasErrored, fetchLoading } from './fetchReducer';
import { dateReducer } from './dateReducer';
export default combineReducers({
  fetchedItems,
  fetchHasErrored,
  fetchLoading,
  dateReducer
})
