import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addCountry, updateCountry, deleteCountry } from '../../store/country.js';
import CountryForm from '../Category-form/index.js';
import CountryItem from '../Category-item/index.js';


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

