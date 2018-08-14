import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addCountry, updateCountry, deleteCountry } from '../lib/categories.js';
import CountryForm from './player-form';
import CountryItem from './player-item';


const Dashboard = props => {
  return (
    <Fragment>
      <CountryForm onComplete={props.addCountry} buttonText="create" />
      {props.countries.map(country => (
        <li key={country.id}>
          <CountryItem country={country} onComplete={props.updateCountry} onDelete={props.deleteCountry} />
        </li>
      ))}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({ countries: state });

const mapDispatchToProps = (dispatch) => ({
  addCountry: country => dispatch(addCountry(country)),
  updateCountry: country => dispatch(updateCountry(country)),
  deleteCountry: country => dispatch(deleteCountry(country)),
});

Dashboard.propTypes = {
  addCountry: PropTypes.func,
  updateCountry: PropTypes.func,
  deleteCountry: PropTypes.func,
  countries: PropTypes.array,
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);




/* import React from 'react';
import {connect} from 'react-redux';
import {
  playerCreate,
  playerUpdate,
  playerDestroy,
} from '../actions/player-actions.js';

import PlayerList from './player-list.js';
import PlayerForm from './player-form.js';

class Dashboard extends React.Component {
  render() {
    return <div>
      <h1>Ping Pong Leader Board</h1>
      <h2>Add a Player Name and Position</h2>
      <PlayerForm name="create"></PlayerForm>
      <PlayerList />
    </div>
  }
}

const mapStateToProps = state => ({
  players: state.players,
});

const mapDispatchToProps = (dispatch, getState) => {
  return {
    playerCreate: () => dispatch(playerCreate()),
    playerUpdate: values => dispatch(playerUpdate(values)),
    playerDestroy: id => dispatch(playerDestroy(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);



/* 

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addCountry, updateCountry, deleteCountry } from '../store/country';
import CountryForm from './CountryForm';
import CountryItem from './CountryItem';


const Dashboard = props => {
  return (
    <Fragment>
      <CountryForm onComplete={props.addCountry} buttonText="create" />
      {props.countries.map(country => (
        <li key={country.id}>
          <CountryItem country={country} onComplete={props.updateCountry} onDelete={props.deleteCountry} />
        </li>
      ))}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({ countries: state });

const mapDispatchToProps = (dispatch) => ({
  addCountry: country => dispatch(addCountry(country)),
  updateCountry: country => dispatch(updateCountry(country)),
  deleteCountry: country => dispatch(deleteCountry(country)),
});

Dashboard.propTypes = {
  addCountry: PropTypes.func,
  updateCountry: PropTypes.func,
  deleteCountry: PropTypes.func,
  countries: PropTypes.array,
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
*/