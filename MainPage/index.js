import React, {Component} from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  		image: {
	    	height: 100,
	    	borderRadius: 50,
	    	width: 100
	  	}
	});

export default class MainPage extends Component {
	

	constructor(props) {
 		super(props);
 		this.state = {
    		summonerName: 'Wards Please',
    		inGameness: 'Not in Game'
  		};
	}

	render() {
		return (
		<View style={{flex:1, flexDirection: 'column', padding: 100 }}> 
			<Text>{this.state.summonerName}</Text>
			<Image style={styles.image}
				source={{uri: 'https://s-media-cache-ak0.pinimg.com/564x/87/73/c4/8773c48993721e4370f2ad608388be75.jpg' }} />
			<Text>{this.state.inGameness}</Text>
		</View> 
		);
	}
}