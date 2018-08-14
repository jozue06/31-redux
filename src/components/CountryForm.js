import React, { Component } from "react";
import PropTypes from 'prop-types';

class CountryForm extends Component {
  
  constructor(props) {
    super(props);
    this.defaultState = {
      name: '',
    };

    const initialState = this.props.country || this.defaultState;

    this.state =  {...initialState};
  }
  
  onSubmit = event => {
    event.preventDefault();
    this.props.onComplete(this.state);
    this.setState({ ...this.defaultState });
  };

  onChange = event => {
    const val =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;

    const changedBit = {
      [event.target.name]: val
    };
    this.setState(changedBit);
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input name="name" placeholder="name" value={this.state.name} onChange={this.onChange} />
        <button>{this.props.buttonText}</button>
      </form>
    );
  }
}

CountryForm.propTypes = {
  onComplete: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
  country: PropTypes.object,
}

CountryForm.defaultProps = {
  category: {
    name: '',
  }
}

export default CountryForm;