export function fetchHasErrored(state = false, action) {
  switch (action.type) {
    case 'ITEMS_HAS_ERRORED':
      return action.hasErrored

    default:
      return state
  }
}

export function fetchLoading(state = false, action) {
  switch (action.type) {
    case 'ITEMS_IS_LOADING':
      return action.isLoading

    default:
      return state
  }
}

export function fetchedBirthdays(state = [], action) {
  switch (action.type) {
    case 'ITEMS_FETCH_DATA_SUCCESS':
      return action.items

    default:
      return state
  }
}

const defaultValues = {
  user: {
    name: null,
    birthdate: null,
    age: null
  },
  sharedAge: [],
  sharedBirthdays: []
}

export function birthdayResponse(state = defaultValues, action) {
  switch (action.type) {
    case 'BIRTHDAY_RESPONSE':
      return action.response

    default:
      return state
  }
}
