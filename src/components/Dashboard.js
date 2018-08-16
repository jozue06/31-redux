import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addCategory, updateCategory, deleteCategory } from '../lib/categories.js';
import CategoryForm from './CategoryForm.js';
import CategoryItem from './CategoryItem.js';
import Header from './Header'
import Footer from './Footer'
import S from '../style/styles'



const Dashboard = props => {
  console.log('categorie', props.categories)
  return (
    <S.Wrapper>
      <Header />

      <CategoryForm onComplete={props.addCategory} buttonText="create" />
      {props.categories.categories.map(category => (
        <li key={category.id}>
          <CategoryItem category={category} name={category.name} budget={category.budget} onComplete={props.updateCategory} onDelete={props.deleteCategory} />
        </li>
      ))}
      <Footer />
    </S.Wrapper>
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
  categories: PropTypes.object,
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
