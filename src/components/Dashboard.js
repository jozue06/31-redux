import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addCategory, updateCategory, deleteCategory } from '../lib/categories.js';
import CategoryForm from './CategoryForm.js';
import CategoryItem from './CategoryItem.js';


const Dashboard = props => {
  return (
    <Fragment>
      <CategoryForm onComplete={props.addCategory} buttonText="create" />
      {props.categories.map(category => (
        <li key={category.id}>
          <CategoryItem category={category} budget={category.budget} onComplete={props.updateCategory} onDelete={props.deleteCategory} />
        </li>
      ))}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({ categories: state });

const mapDispatchToProps = (dispatch) => ({
  addCategory: category => dispatch(addCategory(category)),
  updateCategory: category => dispatch(updateCategory(category)),
  deleteCategory: category => dispatch(deleteCategory(category)),
});

Dashboard.propTypes = {
  addCategory: PropTypes.func,
  updateCategory: PropTypes.func,
  deleteCategory: PropTypes.func,
  categories: PropTypes.array,
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
