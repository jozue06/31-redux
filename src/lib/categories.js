import uuid from 'uuid/v1';

// Actions
const ADD = 'Category/ADD';
const UPDATE = 'Category/UPDATE';
const DELETE = 'Ccategory/DELETE';



// Reducer
export default function reducer(state = {categories:[]}, action) {

  const {type, payload} = action;

  switch (type) {
    case ADD:
      payload.id = uuid();
      payload.timestamp = new Date();
    
      return {
         ...state, 
         categories: [...state.categories, payload]
        
      }

    case UPDATE:
      return {  
        ...state,
      categories: state.categories.map(category => category.id === payload.id ? payload : category)
      }
    
    case DELETE:
      return {
        ...state, 
        categories: state.categories.filter(category => category.id !== payload.id)
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