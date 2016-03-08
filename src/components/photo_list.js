import _ from 'lodash';
import React from 'react';
import PhotoListItem from './photo_list_item';

export default class PhotoList extends React.Component {
	renderPhotos() {

		const { selectedAlbum } = this.props;

		return (
			<ul className="row">
				{this.props.photos.map(function(photo, index){
            return (
            	<PhotoListItem key={index} {...photo} />
            );
         })}
      </ul>
		);
	}

	render() {
		return (
			<div className="row">
				{this.renderPhotos()}
			</div>
		);
	}
};