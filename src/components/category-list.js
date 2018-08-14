import React from 'react';
// import {connect} from 'react-redux';

import CategoryItem from './Category-item/index.js';
import {
  categoryCreate,
} from '../actions/actions.js';

class CategoryList extends React.Component {
  constructor() {
    super();

    this.displayAll = this.displayAll.bind(this);
  }

  displayAll() {
    console.log("props",this.props)
    // return this.props.category.map(category => {
      return <CategoryItem key={this.category} id={this.category} name={this.category} budget={this.category} isEditing={this.category}></CategoryItem>
    // })
  };
  

  render() {
    return (
      <div>
        <h2>Current category list:</h2>
        <ul>{this.displayAll()}</ul>
      </div>
    )
  }
}


export default CategoryList;