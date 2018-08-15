import React, { Component } from "react";
import PropTypes from 'prop-types';
import S from '../style/styles'

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
      <S.Wrapper>
      <form onSubmit={this.onSubmit}>
        <input name="name" type="text" iropdent="category formstuff" placeholder="category" value={this.props.name} onChange={this.onChange} />
        <input name="budget" type="number" placeholder="budget" value={this.props.budget} onChange={this.onChange} />
        <button>{this.props.buttonText}</button>
      </form>
      </S.Wrapper>
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
