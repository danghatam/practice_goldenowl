'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';
import AltContainer from 'alt-container';
import UserStore from '../../stores/UserStore';
import UserActions from '../../actions/UserActions';

class List extends Component {

	componentDidUpdate() {
		$('#categories_tb').DataTable();
	}

	deleteUser(id, e) {
		e.preventDefault();
		if (window.confirm("Do you really want to delete?")) {
			UserActions.deleteUser(id);
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

		let categories = this.props.users.map( (User, index) => 
			<tr key={ User.id }>
				<td>{ index + 1 }</td>
				<td>{ User.name }</td>
				<td>
					<Link className="btn btn-info" to={`/admin/categories/${User.id}`}><i className="fa fa-edit"></i> Edit</Link>
					<button className="btn btn-danger" onClick={this.deleteUser.bind(this, User.id)}><i className="fa fa-trash"></i> Delete</button>
				</td>
			</tr>
		);
		return (
			<div>
				<h2 className="page-title">Users</h2>

				<div className="panel panel-default">
					<div className="panel-heading">List of User</div>
					<div className="panel-body">

						<div className="well">
							<Link to="/admin/categories/new" className="btn btn-success">Add new User</Link>
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
								{ users }
							</tbody>
						</table>

					</div>
				</div>
			</div>
		);
	}
}

class User extends Component {

	componentDidMount(){
		UserStore.fetchCategories();
	}

	render() {
		return (
			<AltContainer store={ UserStore }>
				<List />
			</AltContainer>
		);
	}
}

export default User;