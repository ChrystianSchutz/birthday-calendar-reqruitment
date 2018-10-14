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
