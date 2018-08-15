import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CategoryForm from './CategoryForm';

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
    });
    this.props.onComplete(category);
  }

  deleteCategory = () => {
    this.props.onDelete(this.props.category);
  }


  render() {
    return (
      <div> 
      <span onClick={this.showEditForm}>Category: {this.props.category.category} Budget: {this.props.category.budget}</span>
      <button onClick={this.deleteCategory}>x</button>
      {this.state.editing && <CategoryForm onComplete={this.updateCategory} buttonText="update" category={this.props.category} budget={this.props.budget} />}
      </div>
    );
  }
}

CategoryItem.propTypes = {
  onComplete: PropTypes.func,
  onDelete: PropTypes.func,
  category: PropTypes.object,
}