'use strict';

import alt from '../alt';
import UserActions from '../actions/UserActions';
import UserSource from '../sources/UserSource';

class UserStore {
	constructor() {
		
		this.users = [];
		this.token = null;
		
		this.bindListeners({
			handleGetUsers: 		UserActions.GET_USERS,
			handleAddUser: 			UserActions.ADD_USER,
			handleEditUser: 		UserActions.EDIT_USER,
			handleDeleteUser: 	UserActions.DELETE_USER,
			handleAuthenticate: UserActions.AUTHENTICATE,
			handleUsersFailed:  UserActions.USERS_FAILED
		});

		this.exportAsync(UserSource);

		this.exportPublicMethods({
			getUser: this.getUser.bind(this)
		});
	}


	handleAuthenticate(token){
		this.token = token;
	}

	getUser(_id){
		return this.users.find( item => item._id == _id );
	}

	handleGetUsers(users) {
		this.users = users;
		this.error = null;
	}

	handleAddUser(user) {
		this.users.push(user);
		this.error = null;
	}

	handleEditUser(User) {
		let index = this.users.findIndex( item => item._id == User._id );
		this.users[index] = User;
	}

	handleDeleteUser(_id) {
		let temp = this.users.filter( item => item._id != _id );
		this.users = temp;
	}

	handleUsersFailed(err) {
		this.error = err;
	}

}

export default alt.createStore(UserStore);