'use strict';

import React, { Component } from 'react';
import AltContainer from 'alt-container';
import CategoryStore from '../../stores/CategoryStore';
import CategoryActions from '../../actions/CategoryActions';

class Form extends Component {

	componentDidMount() {
		if(this.props.categories.length > 0){
			$('.selectpicker').selectpicker({
				dropupAuto: false
			});
		}
	}
	componentDidUpdate() {
		$('.selectpicker').selectpicker({
			dropupAuto: false
		});
	}

	submitCategory(e) {
		e.preventDefault();
		let category = {
			name: this.name.value,
			parent_id: this.parent.value
		};
		CategoryActions.addCategory(category);
	}

	render() {

		let error = 
			this.props.error ?
			<div className="alert alert-dismissible alert-danger">
				<button type="button" class="close" data-dismiss="alert"><i className="fa fa-remove"></i></button>
				<strong>Error!</strong> {this.props.error}
			</div>
			: null;
		
		let parents = this.props.categories.map( category => 
			<option key={category.id} value={ category.id }>{ category.name }</option>
		);

		return (
			<div>
				<h2 className="page-title">Categories</h2>
				{error}
				<div className="panel panel-default" style={ {overflow: 'visible'}}>
					<div className="panel-heading">Add new category</div>
					<div className="panel-body">
						<form method="get" className="form-horizontal">

							<div className="form-group">
								<label className="col-sm-2 control-label">Parent</label>
								<div className="col-sm-10">
									<select className="selectpicker" ref={ c => this.parent = c }>
										<optgroup label="Select parent category">
											<option value="0">None</option>
											{ parents }
										</optgroup>
									</select>
								</div>
							</div>

							<div className="form-group">
								<label className="col-sm-2 control-label">Name</label>
								<div className="col-sm-10">
									<input type="text" ref={ c => this.name = c } className="form-control" />
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

class NewCategory extends Component {

	componentWillMount() {
		if(CategoryStore.categoriesIsEmpty()){
			CategoryStore.fetchCategories();
		}
	}

	render() {
		return(
			<AltContainer store={ CategoryStore }>
				<Form />
			</AltContainer>
		);
	}
}

export default NewCategory;