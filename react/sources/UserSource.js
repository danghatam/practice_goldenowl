'use strict';

import UserActions from '../actions/UserActions';
import UserAPI from '../api/User';

const UserSource = {
	
	fetchCategories() {
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