'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';
import AltContainer from 'alt-container';
import CategoryStore from '../../stores/CategoryStore';
import CategoryActions from '../../actions/CategoryActions';

class List extends Component {

	componentDidUpdate() {
		$('#categories_tb').DataTable();
	}

	deleteCategory(id, e) {
		e.preventDefault();
		if (window.confirm("Do you really want to delete?")) {
			CategoryActions.deleteCategory(id);
		}
	}

	render() {
		if(this.props.error){
			return (
				<div className="alert alert-dismissible alert-danger">
					<button type="button" class="close" data-dismiss="alert"><i className="fa fa-remove"></i></button>
					<strong>Error!</strong> {this.props.error}
				</div>
			);
		}

		let categories = this.props.categories.map( (category, index) => 
			<tr key={ category.id }>
				<td>{ index + 1 }</td>
				<td>{ category.name }</td>
				<td>
					<Link className="btn btn-info" to={`/admin/categories/${category.id}`}><i className="fa fa-edit"></i> Edit</Link>
					<button className="btn btn-danger" onClick={this.deleteCategory.bind(this, category.id)}><i className="fa fa-trash"></i> Delete</button>
				</td>
			</tr>
		);
		return (
			<div>
				<h2 className="page-title">Categories</h2>

				<div className="panel panel-default">
					<div className="panel-heading">List of category</div>
					<div className="panel-body">

						<div className="well">
							<Link to="/admin/categories/new" className="btn btn-success">Add new category</Link>
						</div>

						<table id="categories_tb" className="display table table-striped table-bordered table-hover" cellspacing="0" width="100%">
							<thead>
								<tr>
									<th>Index</th>
									<th>Name</th>
									<th>Tools</th>
								</tr>
							</thead>
							<tfoot>
								<tr>
									<th>Index</th>
									<th>Name</th>
									<th>Tools</th>
								</tr>
							</tfoot>
							<tbody>
								{ categories }
							</tbody>
						</table>

					</div>
				</div>
			</div>
		);
	}
}

class Category extends Component {

	componentDidMount(){
		CategoryStore.fetchCategories();
	}

	render() {
		return (
			<AltContainer store={ CategoryStore }>
				<List />
			</AltContainer>
		);
	}
}

export default Category;