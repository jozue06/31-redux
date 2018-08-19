import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CategoryForm from './CategoryForm';
import S from '../style/styles'

export default class CategoryItem extends Component {

  state = {
    editing: false
  };

  showEditForm = () => {
    this.setState({ editing: true }, () => console.log('sthate 1', this.props))
  }

  updateCategory = (category) => {
    this.setState({
      editing: false
    }, () => console.log('update the state', category));
    this.props.onComplete(category);
  }

  deleteCategory = () => {
    this.props.onDelete(this.props);
  }


  render() {
    return (
      <S.Wrapper>
        <S.Text onClick={this.showEditForm}>Category: {this.props.name} Budget: {this.props.budget}</S.Text>
        <button onClick={this.deleteCategory}>x</button>
        {this.state.editing && <CategoryForm
          category={this.props.category}
          onComplete={this.updateCategory}
          buttonText="update"
          name={this.props.name}
          budget={this.props.budget} />}
      </S.Wrapper>
    );
  }
}

CategoryItem.propTypes = {
  onComplete: PropTypes.func,
  onDelete: PropTypes.func,
  categories: PropTypes.object,
}