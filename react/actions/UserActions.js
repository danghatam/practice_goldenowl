'use strict';

import alt from '../alt';
import UserAPI from '../api/user';

class UserActions {

	authenticate(user){
		return dispatch => {
			UserAPI.authenticate(user)
			.then( token => {
				token = token;
				dispatch(token);
			})
			.catch( err => this.usersFailed(err) );
		};
	}

	getUsers(users) {
		return users;
	}

	addUser(user) {
		return dispatch => {
			UserAPI.add(user)
			.then( u => dispatch(u))
			.catch( err => this.usersFailed(err) );
		};
	}

	editUser(User) {
		return dispatch => {
			UserAPI.edit(User)
			.then( User => dispatch(User))
			.catch( err => this.usersFailed(err) );
		};
	}

	deleteUser(id) {
		return dispatch => {
			UserAPI.delete(id)
			.then( id => dispatch(id) )
			.catch( err => this.usersFailed(err) );
		};
	}

	usersFailed(err) {
		return err;
	}
}

export default alt.createActions(UserActions);