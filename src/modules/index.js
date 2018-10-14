import { combineReducers } from 'redux'
import { items, fetchHasErrored, fetchLoading } from './items';

export default combineReducers({
  items,
  fetchHasErrored,
  fetchLoading,
})
