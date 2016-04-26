'use strict';

import React, {Component} from 'react';
import AltContainer from 'alt-container';
import CategoryStore from '../../stores/CategoryStore';
import CategoryActions from '../../actions/CategoryActions';

class Form extends Component {

	constructor(props, context){

		super(props, context);

		let { name, parent_id } = CategoryStore.getCategory(this.props.id);
		this.name = name;
		this.parent = parent_id;
	}

	componentDidMount(){		

		$('.selectpicker').selectpicker({
				dropupAuto: false
			});
	}

	submitCategory(e) {
		e.preventDefault();
		let category = {
			id: this.props.id,
			name: this.name.value,
			parent_id: this.parent.value
		};

		CategoryActions.editCategory(category);
		this.props.router.push({ pathname: `/admin/categories`});
	}

	render() {

		let parents = this.props.categories.map( category => {
				if(category.id == this.parent){
					return <option key={category.id} value={ category.id } selected>{ category.name }</option>;
				}
				return <option key={category.id} value={ category.id }>{ category.name }</option>;
			}
		);

		return (
			<div>
				<h2 className="page-title">Categories</h2>
				<div className="panel panel-default" style={ {overflow: 'visible'}}>
					<div className="panel-heading">Add new category</div>
					<div className="panel-body">
						<form method="get" className="form-horizontal">

							<div className="form-group">
								<label className="col-sm-2 control-label">Parent</label>
								<div className="col-sm-10">
									<select className="selectpicker" ref={ c => this.parent = c } defaultValue={this.parent}>
										<optgroup label="Select parent category">
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
									<button className="btn btn-primary" onClick={ this.submitCategory.bind(this) }>Submit</button>
								</div>
							</div>

						</form>

					</div>
				</div>
			</div>
		);
	}
}

class EditCategory extends Component {

	constructor(props, context){
		super(props, context);
	}

	render() {
		return (
			<AltContainer store={CategoryStore}>
				<Form id={this.props.params.id} router={this.context.router} />
			</AltContainer>
		);
	}
}

EditCategory.contextTypes = {
  router: React.PropTypes.object.isRequired
};	

export default EditCategory;