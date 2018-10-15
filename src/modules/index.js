import { combineReducers } from 'redux'
import { fetchedBirthdays, fetchHasErrored, fetchLoading, birthdayResponse } from './fetchReducer';
import { dateReducer } from './dateReducer';
export default combineReducers({
  fetchedBirthdays,
  fetchHasErrored,
  fetchLoading,
  dateReducer,
  birthdayResponse
})
