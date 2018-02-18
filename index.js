// Import library for component
import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';
// import App from './App.js';


//Create a component
const App = () => {
	return (
		<View style={{ flex: 1 }}>
			<Header headerText={'Albums'} />
			<AlbumList />
		</View>
		);
};

// const App = () => (
// 	<Text>Some Text</Text>
// );

//render it ONLY THE TOP LEVEL COMPONENT USES THE APPREGISTRY. OTHERS ARE EXPORTED
AppRegistry.registerComponent('albums', () => App);
