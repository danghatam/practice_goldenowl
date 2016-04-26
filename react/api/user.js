'use strict';

class UserAPI {

	authenticate() {
		return new Promise( (resolve, reject) => {
			fetch('/api/admin/categories', {
				method: 'POST',
				headers: {
					'Accept':'application/json',
					'Content-Type': 'application/json'
				},
				credentials: 'same-origin',
				body: JSON.stringify(category)
			})
			.then( response => {
				if(response.ok) return response.json(); 
				else reject(response.statusText);
			})
			.then( res => {
				category.id = res.id;
				resolve(category);
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
		      'Content-Type': 'application/json'
		    },
		    credentials: 'same-origin'
		  })
		  .then( response => response.json())
		  .then( categories => resolve(categories))
		  .catch( err => reject(err));
		});
	}

	add(category) {
		return new Promise( (resolve, reject) => {
			fetch('/api/admin/categories', {
				method: 'POST',
				headers: {
					'Accept':'application/json',
					'Content-Type': 'application/json'
				},
				credentials: 'same-origin',
				body: JSON.stringify(category)
			})
			.then( response => {
				if(response.ok) return response.json(); 
				else reject(response.statusText);
			})
			.then( res => {
				category.id = res.id;
				resolve(category);
			})
			.catch( err => reject(err) )
		});
	}

	edit(category) {
		return new Promise( (resolve, reject) => {
			fetch(`/api/admin/categories/${category.id}`, {
				method: 'PUT',
				headers: {
					'Accept':'application/json',
					'Content-Type': 'application/json'
				},
				credentials: 'same-origin',
				body: JSON.stringify(category)
			})
			.then( response => {
				if(response.ok) {
					resolve(category);
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
			fetch(`/api/admin/categories/${id}`, {
				method: 'DELETE',
				header: {
					'Accept':'application/json',
					'Content-Type': 'application/json'
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