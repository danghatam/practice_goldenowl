'use strict';

class UserAPI {

	constructor(){
		this.token = null;
	}

	authenticate(user) {
		return new Promise( (resolve, reject) => {
			fetch('/authenticate', {
				method: 'POST',
				headers: {
					'Accept':'application/json',
					'Content-Type': 'application/json'
				},
				credentials: 'same-origin',
				body: JSON.stringify(user)
			})
			.then( response => {
				if(response.ok) return response.json(); 
				else reject(response.statusText);
			})
			.then( res => {
				if(res.success){
					this.token = res.token;
					resolve(res.token);
				} else {
					reject(res.message);
				}
			})
			.catch( err => reject(err) )
		});
	}

	list() {
		return new Promise( (resolve, reject) => {
			fetch('/api/users', {
		    method: 'GET',
		    headers: {
		      'Accept': 'application/json',
		      'Content-Type': 'application/json',
		      'x-access-token': this.token
		    },
		    credentials: 'same-origin'
		  })
		  .then( response => response.json())
		  .then( users => resolve(users))
		  .catch( err => reject(err));
		});
	}

	add(user) {
		return new Promise( (resolve, reject) => {
			fetch('/api/users', {
				method: 'POST',
				headers: {
					'Accept':'application/json',
					'Content-Type': 'application/json',
		      'x-access-token': this.token
				},
				credentials: 'same-origin',
				body: JSON.stringify(user)
			})
			.then( response => {
				if(response.ok) return response.json(); 
				else reject(response.statusText);
			})
			.then( res => {
				user.id = res.id;
				resolve(user);
			})
			.catch( err => reject(err) )
		});
	}

	edit(user) {
		return new Promise( (resolve, reject) => {
			fetch(`/api/users/${user._id}`, {
				method: 'PUT',
				headers: {
					'Accept':'application/json',
					'Content-Type': 'application/json',
		      'x-access-token': this.token
				},
				credentials: 'same-origin',
				body: JSON.stringify(user)
			})
			.then( response => {
				if(response.ok) {
					resolve(user);
				}
				else {
					reject(response.statusText);
				}
			})
			.catch( err => reject(err) );
		});
	}

	delete(id) {
		return new Promise( (resolve, reject) => {
			fetch(`/api/users/${id}`, {
				method: 'DELETE',
				headers: {
					'Accept':'application/json',
		      'x-access-token': this.token
				},
				credentials: 'same-origin'
			})
			.then( response => {
				if(response.ok) {
					resolve(id);
				}
				else {
					reject(response.statusText);
				}
			})
			.catch( err => reject(err) );
		});
	}
}

export default new UserAPI;