import uuid from 'uuid/v1';

// Actions
const ADD = 'Category/ADD';
const UPDATE = 'Category/UPDATE';
const DELETE = 'Ccategory/DELETE';

const defaultState = [];

// Reducer
export default function reducer(state = defaultState, action) {

  const {type, payload} = action;

  switch (type) {
    case ADD:
      payload.id = uuid();
    
      return [...state, payload];

    case UPDATE:
      return state.map(category => category.id === payload.id ? payload : category);
    
    case DELETE:
      return state.filter(category => category.id !== payload.id);

    default: return state;
  }
}

// Action Creators
export function addCategory(category) {
  return {
    type: ADD,
    payload: category
  }
}

export function updateCategory(category) {
  return {
    type: UPDATE,
    payload: category
  }
}

export function deleteCategory(category) {
  return {
    type: DELETE,
    payload: category
  }
}