import React from 'react';
import { Image, Text, View } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = (props) => {
	return (
		<Card>
			<CardSection>
				<View>
					<Image></Image>
				</View>
				<View>
					<Text>{props.album.title}</Text>
					<Text>{props.album.artist}</Text>
				</View>
			</CardSection>
		</Card>
	);
};

export default AlbumDetail;
