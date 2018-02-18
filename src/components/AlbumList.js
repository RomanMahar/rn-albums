import React, { Component } from 'react';
import { View, Text } from 'react-native';

// by using extends component we are indicating 
// that we want to borrow functionality from Component.
// class components require render() method
class AlbumList extends Component {
	componentWillMount() {
		console.log('component will mount in AlbumList');
		// debugger;
	}

	render() {
		return (
			<View>
				<Text> Centrale List</Text>
			</View>
		);
	}
}

export default AlbumList;
