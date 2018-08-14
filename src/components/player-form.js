import React, { Component } from "react";
import PropTypes from 'prop-types';

class CountryForm extends Component {
  
  constructor(props) {
    super(props);
    this.defaultState = {
      name: '',
      budget: 0,
    };

    const initialState = this.props.country || this.defaultState;

    this.state =  {...initialState};
  }
  
  onSubmit = event => {
    event.preventDefault();
    this.props.onComplete(this.state);
    this.setState({ ...this.defaultState }, () => console.log('state ', this.state));
  };

  onChange = event => {
    

    const changedBit = {
      [event.target.name]: event.target.value
    };
    this.setState(changedBit)
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input name="category" placeholder="category" value={this.props.name} onChange={this.onChange} />
        <input name="budget" placeholder="budget" value={this.props.bugdet} onChange={this.onChange} />
        <button>{this.props.buttonText}</button>
      </form>
    );
  }
}

CountryForm.propTypes = {
  onComplete: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
  category: PropTypes.object,
}

CountryForm.defaultProps = {
  category: {
    name: '',
    budget:0,
  }
}

export default CountryForm;
