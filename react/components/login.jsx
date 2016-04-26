import React, { Component } from 'react';
import AltContainer from 'alt-container';
import UserStore from '../stores/UserStore';
import UserActions from '../actions/UserActions';

class Form extends Component {

	constructor(props, context){

		super(props, context);
	}

	submitLogin(e){
		e.preventDefault();
		let user = {
			username: this.username.value,
			password: this.password.value
		};

		UserActions.authenticate(user);
	}

	render() {
		if(this.props.token){
			this.props.router.push({ pathname: `/users`});
			return( <div>Authenticated</div>)
		}
		return (
			<div className="login-page bk-img">
				<div className="form-content">
					<div className="container">
						<div className="row">
							<div className="col-md-6 col-md-offset-3">
								<h1 className="text-center text-bold text-light mt-4x">Sign in</h1>
								<div className="well row pt-2x pb-3x bk-light">
									<div className="col-md-8 col-md-offset-2">
										<label for="" className="text-uppercase text-sm">Your Username or Email</label>
										<input type="text" ref={ ref => this.username = ref } placeholder="Username" className="form-control mb" />

										<label for="" className="text-uppercase text-sm">Password</label>
										<input type="password" ref={ ref => this.password = ref } placeholder="Password" className="form-control mb" />

										<button className="btn btn-primary btn-block" onClick={ this.submitLogin.bind(this) }>LOGIN</button>
									</div>
								</div>
								<div className="text-center text-light">
									<a href="#" className="text-light">Forgot password?</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

class Login extends Component {

	constructor(props, context){
		super(props, context);
	}

	render(){
		return(
			<AltContainer store={UserStore}>
				<Form router={this.context.router} />
			</AltContainer>
		)
	}
}

Login.contextTypes = {
  router: React.PropTypes.object.isRequired
};	


export default Login;