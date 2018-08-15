import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CategoryForm from './CategoryForm';
import S from '../style/styles'

export default class CategoryItem extends Component {

  state = {
    editing: false
  };

  showEditForm = () => {
    this.setState({ editing: true })
  }

  updateCategory = (category) => {
    this.setState({
      editing: false
    }, () => console.log('sthate', this.props, ' and cattss:', category));
    this.props.onComplete(this.props);
  }

  deleteCategory = () => {
    this.props.onDelete(this.props.category);
  }


  render() {
    return (
      <S.Wrapper>
      <S.Text onClick={this.showEditForm}>Category: {this.props.name} Budget: {this.props.budget}</S.Text>
      <button onClick={this.deleteCategory}>x</button>
      {this.state.editing && <CategoryForm onComplete={this.updateCategory} buttonText="update" name={this.props.name} budget={this.props.budget} />}
      </S.Wrapper>
    );
  }
} 

CategoryItem.propTypes = {
  onComplete: PropTypes.func,
  onDelete: PropTypes.func,
  category: PropTypes.object,
}