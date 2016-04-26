'use strict';

import alt from '../alt';
import CategoryAPI from '../api/category';

class CategoryActions {
	getCategories(categories) {
		return categories;
	}

	addCategory(category) {
		return dispatch => {
			CategoryAPI.add(category)
			.then( category => dispatch(category))
			.catch( err => this.categoriesFailed(err) );
		};
	}

	editCategory(category) {
		return dispatch => {
			CategoryAPI.edit(category)
			.then( category => dispatch(category))
			.catch( err => this.categoriesFailed(err) );
		};
	}

	deleteCategory(id) {
		return dispatch => {
			CategoryAPI.delete(id)
			.then( id => dispatch(id) )
			.catch( err => this.categoriesFailed(err) );
		};
	}

	categoriesFailed(err) {
		return err;
	}
}

export default alt.createActions(CategoryActions);