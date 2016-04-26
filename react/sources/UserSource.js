'use strict';

import UserActions from '../actions/UserActions';
import UserAPI from '../api/user';

const UserSource = {
	
	fetchUsers() {
		return {
			remote() {
				return UserAPI.list();
			},

			local() {
				return null;
			},

			success: UserActions.getUsers,
			error: UserActions.usersFailed

		};
	}

};

export default UserSource;