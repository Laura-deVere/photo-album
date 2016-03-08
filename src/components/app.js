import React from 'react';
import PhotoList from './photo_list';
import NavBar from './nav_bar';

const photos = [[
  {
    albumId: 1,
    id: 1,
    title: "accusamus beatae ad facilis cum similique qui sunt",
    url: "http://placehold.it/600/92c952",
    thumbnailUrl: "http://placehold.it/150/30ac17"
  },
  {
    albumId: 1,
    id: 2,
    title: "reprehenderit est deserunt velit ipsam",
    url: "http://placehold.it/600/771796",
    thumbnailUrl: "http://placehold.it/150/dff9f6"
  },
  {
    albumId: 2,
    id: 3,
    title: "officia porro iure quia iusto qui ipsa ut modi",
    url: "http://placehold.it/600/24f355",
    thumbnailUrl: "http://placehold.it/150/1941e9"
  },
  {
    albumId: 1,
    id: 4,
    title: "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
    url: "http://placehold.it/600/d32776",
    thumbnailUrl: "http://placehold.it/150/39e985"
  }],
  [{
	albumId: 2,
	id: 5,
	title: "natus nisi omnis corporis facere molestiae rerum in",
	url: "http://placehold.it/600/f66b97",
	thumbnailUrl: "http://placehold.it/150/7735a"
	},
	{
	albumId: 2,
	id: 6,
	title: "accusamus ea aliquid et amet sequi nemo",
	url: "http://placehold.it/600/56a8c2",
	thumbnailUrl: "http://placehold.it/150/c672a0"
	},
	{
	albumId: 2,
	id: 7,
	title: "officia delectus consequatur vero aut veniam explicabo molestias",
	url: "http://placehold.it/600/b0f7cc",
	thumbnailUrl: "http://placehold.it/150/4105a5"
	},
	{
	albumId: 2,
	id: 8,
	title: "aut porro officiis laborum odit ea laudantium corporis",
	url: "http://placehold.it/600/54176f",
	thumbnailUrl: "http://placehold.it/150/412ffd"
	}],
	[{
	albumId: 3,
	id: 9,
	title: "qui eius qui autem sed",
	url: "http://placehold.it/600/51aa97",
	thumbnailUrl: "http://placehold.it/150/15c072"
	},
	{
	albumId: 3,
	id: 10,
	title: "beatae et provident et ut vel",
	url: "http://placehold.it/600/810b14",
	thumbnailUrl: "http://placehold.it/150/980cc2"
	},
	{
	albumId: 3,
	id: 11,
	title: "nihil at amet non hic quia qui",
	url: "http://placehold.it/600/1ee8a4",
	thumbnailUrl: "http://placehold.it/150/e65eee"
	},
	{
	albumId: 3,
	id: 12,
	title: "mollitia soluta ut rerum eos aliquam consequatur perspiciatis maiores",
	url: "http://placehold.it/600/66b7d2",
	thumbnailUrl: "http://placehold.it/150/bc9589"
	}]
 ];

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			photos: photos,
			selectedAlbum: 0
		};
		this.onSelectAlbum = this.onSelectAlbum.bind(this);
	}

	onSelectAlbum(id) {

		this.setState({
        selectedAlbum: id
    });
		console.log(this.state.selectedAlbum);
	}

	render() {
		return (
			<div className="container">
				<NavBar onSelectAlbum={this.onSelectAlbum} />
				<h3 className="h1">Photo Album</h3>
				<PhotoList photos={this.state.photos[this.state.selectedAlbum]} />
			</div>
		);
	}
};