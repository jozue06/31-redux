import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from '../Dashboard/index.js';
import store from '../../store/index';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <BrowserRouter>
            <Route path="/" component={Dashboard} />
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;