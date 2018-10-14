
const defaultState = {
    currentWeek: new Date(),
    selectedDate: new Date()
  }
  
  export function dateReducer(state = defaultState, action) {
    switch (action.type) {
      case 'SET_CURRENT_WEEK':
        return Object.assign({}, state, {
          currentWeek: action.currentWeek
        })
  
      case 'SET_SELECTED_DATE':
        return Object.assign({}, state, {
          selectedDate: action.currentWeek
        })
        
      default:
        return state
    }
  }
  