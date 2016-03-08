import React from 'react';

export default class PhotoListItem extends React.Component  {
	constructor(props) {
		super(props);

		this.state = {
			counter: this.props.id
		};
	}

	onLikeButton() {	
		this.setState({
        counter: this.state.counter + 1
    });
	}

	render() {
		const { title, thumbnailUrl } = this.props;

		return (
			<li className="col-xs-6 col-md-3">
    		<img src={thumbnailUrl} className="thumbnail" />
    		<p>{title}</p>
    		<button className="btn glyphicon glyphicon-star" onClick={this.onLikeButton.bind(this)} />
    		<p> {this.state.counter} Likes</p>
    	</li>
		);
	}
};
