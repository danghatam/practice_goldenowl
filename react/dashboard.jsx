'use strict';

import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

class Dashboard extends Component {
	render() {
		return (
			<div className="ts-main-content">
				<nav className="ts-sidebar">
					<ul className="ts-sidebar-menu">
						<li className="ts-label">Search</li>
						<li>
							<input type="text" className="ts-sidebar-search" placeholder="Search here..." />
						</li>
						<li className="ts-label">Main</li>

						<li>
							<a href="#"><i className="fa fa-folder"></i> User</a>
							<ul>
								<li><Link to='/admin/categories'>List users</Link></li>
								<li><Link to='/admin/categories/new'>Add new user</Link></li>
							</ul>
						</li>

					</ul>
					<ul className="ts-profile-nav">
						<li><a href="#">Help</a></li>
						<li><a href="#">Settings</a></li>
						<li className="ts-account">
							<a href="#"><img src="/images/ts-avatar.jpg" className="ts-avatar hidden-side" alt="" /> Account <i className="fa fa-angle-down hidden-side"></i></a>
							<ul>
								<li><a href="#">My Account</a></li>
								<li><a href="#">Edit Account</a></li>
								<li><a href="#">Logout</a></li>
							</ul>
						</li>
					</ul>
				</nav>
				<div className="content-wrapper">
					<div className="container-fluid">

						<div className="row">
							<div className="col-md-12">

								{this.props.children}

							</div>
						</div>

					</div>
				</div>
			</div>
		);
	}
}

export default Dashboard;