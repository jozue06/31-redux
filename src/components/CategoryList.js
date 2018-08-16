import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CategoryItem from './CategoryItem';
import S from '../style/styles'

export default class CategoryList extends Component {
    render() {
        return (
            props.categories.categories.map(category => (
                <li key={category.id}>
                    <CategoryItem category={category} budget={category.budget} onComplete={props.updateCategory} onDelete={props.deleteCategory} />
                </li>
            )
            )
        )
    }
}
