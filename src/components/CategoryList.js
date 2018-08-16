import React, { Component } from 'react';
import CategoryItem from './CategoryItem';

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
