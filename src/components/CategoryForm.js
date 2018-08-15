import React, { Component } from "react";
import PropTypes from 'prop-types';

class CategoryForm extends Component {
  
  constructor(props) {
    super(props);
    this.defaultState = {
     
    };

    const initialState = this.props.category || this.defaultState;

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
        <input name="category" placeholder="category" value={this.props.category.category} onChange={this.onChange} />
        <input name="budget" placeholder="budget" value={this.props.category.bugdet} onChange={this.onChange} />
        <button>{this.props.buttonText}</button>
      </form>
    );
  }
}

CategoryForm.propTypes = {
  onComplete: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
  category: PropTypes.object,
}

CategoryForm.defaultProps = {
  category: {
  
  }
}

export default CategoryForm;
