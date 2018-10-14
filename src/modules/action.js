export function fetchHasErrored(bool) {
  return {
    type: 'ITEMS_HAS_ERRORED',
    hasErrored: bool
  }
}

export function fetchLoading(bool) {
  return {
    type: 'ITEMS_IS_LOADING',
    isLoading: bool
  }
}

export function fetchSuccess(items) {
  return {
    type: 'ITEMS_FETCH_DATA_SUCCESS',
    items
  }
}

export function fetchData(url) {
  return dispatch => {
    dispatch(fetchLoading(true))

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText)
        }

        dispatch(fetchLoading(false))

        return response
      })
      .then(response => response.json())
      .then(items => dispatch(fetchSuccess(items)))
      .catch(() => dispatch(fetchHasErrored(true)))
  }
}


export function birthdayResponse(response) {
  return {
    type: 'BIRTHDAY_RESPONSE',
    response
  }
}

export function postData(url = ``, data = {}) {
  return dispatch => {
    dispatch(fetchLoading(true))

    return fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
      },
        body: JSON.stringify(data),
    })
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText)
      }

      dispatch(fetchLoading(false))

      return response
    })
    .then(response => response.json())
    .then(response => dispatch(birthdayResponse(response)))
    .catch(() => dispatch(fetchHasErrored(true)))
  }
}


export function setCurrentWeek(date){
  return {
    type: 'SET_CURRENT_WEEK',
    currentWeek: date
  }
}

export function setSelectedDate(date){
  return {
    type: 'SET_SELECTED_DATE',
    currentWeek: date
  }
}

export function setBirthday(date){
  return {
    type: 'SET_BIRTHDAY',
    birthday: date
  }
}