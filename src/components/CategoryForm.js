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
    if(this.props.category){
      this.props.onComplete( {
        ...this.state,
      id: this.props.category.id,
      timestamp: this.props.category.timestamp
    })
    }
    else{
    console.log('state #1 ', this.state)
    this.props.onComplete(this.state);
    this.setState({ ...this.defaultState }, () => console.log('state #2', this.state));
    }
  };

  onChange = event => {
    
    console.log('change hpapening', this.state);
    const changedBit = {
      [event.target.name]: event.target.value
    };
    this.setState(changedBit)
  };

  render() {
    return (
      <S.Wrapper>
      <form onSubmit={this.onSubmit}>
        <input name="name" type="text" placeholder="Note Title" value={this.state.name} onChange={this.onChange} />
        <br />
        <textarea name="budget" type="text" placeholder="Note Text" value={this.state.budget} onChange={this.onChange} />
        <br />
        <S.Button>{this.props.buttonText}</S.Button>
      </form>
      </S.Wrapper>
    );
  }
}

CategoryForm.propTypes = {
  onComplete: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
  categories: PropTypes.object,  
  name: PropTypes.string,
  budget: PropTypes.string,
}

CategoryForm.defaultProps = {
  category: {
    
  }
}

export default CategoryForm;
