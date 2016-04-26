'use strict';

import React, { Component } from 'react';
import AltContainer from 'alt-container';
import UserStore from '../../stores/UserStore';
import UserActions from '../../actions/UserActions';

class Form extends Component {

	submitUser(e) {
		e.preventDefault();
		let user = {
			username: this.username.value,
			password: this.password.value
		};
		UserActions.addUser(user);
	}

	render() {

		let error = 
			this.props.error ?
			<div className="alert alert-dismissible alert-danger">
				<button type="button" class="close" data-dismiss="alert"><i className="fa fa-remove"></i></button>
				<strong>Error!</strong> {this.props.error}
			</div>
			: null;

		return (
			<div>
				<h2 className="page-title">Users</h2>
				{error}
				<div className="panel panel-default" style={ {overflow: 'visible'}}>
					<div className="panel-heading">Add new User</div>
					<div className="panel-body">
						<form method="get" className="form-horizontal">

							<div className="form-group">
								<label className="col-sm-2 control-label">Name</label>
								<div className="col-sm-10">
									<input type="text" ref={ c => this.username = c } className="form-control" />
								</div>
							</div>

							<div className="form-group">
								<label className="col-sm-2 control-label">Password</label>
								<div className="col-sm-10">
									<input type="password" ref={ c => this.password = c } className="form-control" />
								</div>
							</div>

							<div className="hr-dashed"></div>
							<div className="form-group">
								<div className="col-sm-8 col-sm-offset-2">
									<button className="btn btn-primary" onClick={ this.submitUser.bind(this) }>Submit</button>
								</div>
							</div>

						</form>

					</div>
				</div>
			</div>
		);
	}
}

class NewUser extends Component {

	render() {
		return(
			<AltContainer store={ UserStore }>
				<Form />
			</AltContainer>
		);
	}
}

export default NewUser;