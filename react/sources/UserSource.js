'use strict';

import CategoryActions from '../actions/CategoryActions';
import CategoryAPI from '../api/category';

const CategorySource = {
	
	fetchCategories() {
		return {
			remote() {
				return CategoryAPI.list();
			},

			local() {
				return null;
			},

			success: CategoryActions.getCategories,
			error: CategoryActions.categoriesFailed

		};
	}

};

export default CategorySource;