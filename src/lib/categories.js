import uuid from 'uuid/v1';

// Actions
const ADD = 'Category/ADD';
const UPDATE = 'Category/UPDATE';
const DELETE = 'Ccategory/DELETE';



// Reducer
// eslint-disable-next-line
export default function reducer(state = localStorage.state && JSON.parse(localStorage.state) || {categories:[]}, action) {

  const {type, payload} = action;
  let newState;
  switch (type) {
    case ADD:
    newState = { 
      categories: [...state.categories, payload],
      id: uuid(),
      timestamp: new Date()
    }
    localStorage.state = JSON.stringify(newState)
      return newState


    case UPDATE:
      return {  
        ...state,
      categories: state.categories.map(category => category.id === payload.id ? payload : category)
      }
    
    case DELETE:
      return {
      
        categories: state.categories.filter(category => {
         return category.id !== payload.category.id})
      };

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