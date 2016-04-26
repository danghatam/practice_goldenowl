'use strict';

import React, {Component} from 'react';
import AltContainer from 'alt-container';
import UserStore from '../../stores/UserStore';
import UserActions from '../../actions/UserActions';

class Form extends Component {

	constructor(props, context){

		super(props, context);
		let { username } = UserStore.getUser(this.props._id);
		this.username = username;
	}

	submitUser(e) {
		e.preventDefault();
		let user = {
			_id: this.props._id,
			username: this.username.value
		};

		UserActions.editUser(user);
		this.props.router.push({ pathname: `/users`});
	}

	render() {
		return (
			<div>
				<h2 className="page-title">Users</h2>
				<div className="panel panel-default" style={ {overflow: 'visible'}}>
					<div className="panel-heading">Edit User</div>
					<div className="panel-body">
						<form method="get" className="form-horizontal">

							<div className="form-group">
								<label className="col-sm-2 control-label">Name</label>
								<div className="col-sm-10">
									<input type="text" ref={ c => this.username = c } defaultValue={this.username} className="form-control" />
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

class EditUser extends Component {

	constructor(props, context){
		super(props, context);
	}

	render() {
		return (
			<AltContainer store={UserStore}>
				<Form _id={this.props.params.id} router={this.context.router} />
			</AltContainer>
		);
	}
}

EditUser.contextTypes = {
  router: React.PropTypes.object.isRequired
};	

export default EditUser;