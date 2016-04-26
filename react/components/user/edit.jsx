'use strict';

import React, {Component} from 'react';
import AltContainer from 'alt-container';
import UserStore from '../../stores/UserStore';
import UserActions from '../../actions/UserActions';

class Form extends Component {

	constructor(props, context){

		super(props, context);

		let { name, parent_id } = UserStore.getUser(this.props.id);
		this.name = name;
		this.parent = parent_id;
	}

	componentDidMount(){		

		$('.selectpicker').selectpicker({
				dropupAuto: false
			});
	}

	submitUser(e) {
		e.preventDefault();
		let User = {
			id: this.props.id,
			name: this.name.value,
			parent_id: this.parent.value
		};

		UserActions.editUser(User);
		this.props.router.push({ pathname: `/admin/categories`});
	}

	render() {

		let parents = this.props.users.map( User => {
				if(User.id == this.parent){
					return <option key={User.id} value={ User.id } selected>{ User.name }</option>;
				}
				return <option key={User.id} value={ User.id }>{ User.name }</option>;
			}
		);

		return (
			<div>
				<h2 className="page-title">Users</h2>
				<div className="panel panel-default" style={ {overflow: 'visible'}}>
					<div className="panel-heading">Add new User</div>
					<div className="panel-body">
						<form method="get" className="form-horizontal">

							<div className="form-group">
								<label className="col-sm-2 control-label">Parent</label>
								<div className="col-sm-10">
									<select className="selectpicker" ref={ c => this.parent = c } defaultValue={this.parent}>
										<optgroup label="Select parent User">
											{ parents }
											<option value="0" selected>None</option>
										</optgroup>
									</select>
								</div>
							</div>

							<div className="form-group">
								<label className="col-sm-2 control-label">Name</label>
								<div className="col-sm-10">
									<input type="text" ref={ c => this.name = c } defaultValue={this.name} className="form-control" />
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
				<Form id={this.props.params.id} router={this.context.router} />
			</AltContainer>
		);
	}
}

EditUser.contextTypes = {
  router: React.PropTypes.object.isRequired
};	

export default EditUser;