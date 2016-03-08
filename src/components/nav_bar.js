import React from 'react';
import PhotoList from './photo_list';

export default class NavBar extends React.Component {
	render(){
		console.log(this.props.name);
		return (
			<nav className="navbar navbar-default">
				<ul className="nav navbar-menu">
					<li className="navbar-brand"><a href="#" onClick={() => this.props.onSelectAlbum(0)}>Album 1</a></li>
					<li className="navbar-brand"><a href="#" onClick={() => this.props.onSelectAlbum(1)}>Album 2</a></li>
					<li className="navbar-brand"><a href="#" onClick={() => this.props.onSelectAlbum(2)}>Album 3</a></li>
				</ul>
			</nav>
		);
	}
};