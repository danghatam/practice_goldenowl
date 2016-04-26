'use strict';

import alt from '../alt';
import CategoryActions from '../actions/CategoryActions';
import CategorySource from '../sources/CategorySource';

class CategoryStore {
	constructor() {
		
		this.categories = [];
		
		this.bindListeners({
			handleGetCategories: 		CategoryActions.GET_CATEGORIES,
			handleAddCategory: 			CategoryActions.ADD_CATEGORY,
			handleEditCategory: 		CategoryActions.EDIT_CATEGORY,
			handleDeleteCategory: 	CategoryActions.DELETE_CATEGORY,
			handleCategoriesFailed: CategoryActions.CATEGORIES_FAILED
		});

		this.exportAsync(CategorySource);

		this.exportPublicMethods({
			categoriesIsEmpty: this.categoriesIsEmpty.bind(this),
			getCategory: this.getCategory.bind(this)
		});
	}

	categoriesIsEmpty(){
		return this.categories.length == 0;
	}

	getCategory(id){
		return this.categories.find( item => item.id == id );
	}

	handleGetCategories(categories) {
		this.categories = categories;
		this.error = null;
	}

	handleAddCategory(category) {
		this.categories.push(category);
		this.error = null;
	}

	handleEditCategory(category) {
		let index = this.categories.findIndex( item => item.id == category.id );
		this.categories[index] = category;
	}

	handleDeleteCategory(id) {
		let temp = this.categories.filter( item => item.id != id );
		this.categories = temp;
	}

	handleCategoriesFailed(err) {
		this.error = err;
	}

}

export default alt.createStore(CategoryStore);