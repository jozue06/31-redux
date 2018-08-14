import uuid from 'uuid/v1';

// Actions
const ADD = 'Country/ADD';
const UPDATE = 'Country/UPDATE';
const DELETE = 'Country/DELETE';

const defaultState = [];

// Reducer
export default function reducer(state = defaultState, action) {

  const {type, payload} = action;

  switch (type) {
    case ADD:
      payload.id = uuid();
    
      return [...state, payload];

    case UPDATE:
      return state.map(country => country.id === payload.id ? payload : country);
    
    case DELETE:
      return state.filter(country => country.id !== payload.id);

    default: return state;
  }
}

// Action Creators
export function addCountry(country) {
  return {
    type: ADD,
    payload: country
  }
}

export function updateCountry(country) {
  return {
    type: UPDATE,
    payload: country
  }
}

export function deleteCountry(country) {
  return {
    type: DELETE,
    payload: country
  }
}