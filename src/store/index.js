import { createStore } from 'redux';
import countryReducer from './country';


export default createStore(countryReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());