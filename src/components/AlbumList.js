import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

// by using extends component we are indicating 
// that we want to borrow functionality from Component.
// class components require render() method
class AlbumList extends Component {
	state = { albums: [] };

	componentWillMount() {
		axios.get('https://rallycoding.herokuapp.com/api/music_albums')
			.then(response => this.setState({ albums: response.data }));
	}

	renderAlbums() {
		// map is array helper function
		return this.state.albums.map(album => 
			<AlbumDetail key={album.title} album={album} />
		);
	}

	render() {
		console.log(this.state);
		return (
			<View>
				{this.renderAlbums()}
			</View>
		);
	}
}

export default AlbumList;
