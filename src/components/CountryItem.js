
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CountryForm from './CountryForm';

export default class CountryItem extends Component {

  state = {
    editing: false
  };

  showEditForm = () => {
    this.setState({ editing: true })
  }

  updateCountry = (country) => {
    this.setState({
      editing: false
    });
    this.props.onComplete(country);
  }

  deleteCountry = () => {
    this.props.onDelete(this.props.country);
  }


  render() {
    return (
      <div> 
      <span onClick={this.showEditForm}>{this.props.country.name}</span>
      <button onClick={this.deleteCountry}>x</button>
      {this.state.editing && <CountryForm onComplete={this.updateCountry} buttonText="update" country={this.props.country} />}
      </div>
    );
  }
}

CountryItem.propTypes = {
  onComplete: PropTypes.func,
  onDelete: PropTypes.func,
  country: PropTypes.object,
}