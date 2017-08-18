import React, {Component} from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
    image: {
	height: 100,
	borderRadius: 50,
	width: 100
    }
});

export class MainPage extends Component {
    constructor(props) {
	super(props);
	this.state = {
	    inGame: false
	};
    }
    render() {
	return (
	    <View style={{flex:1, flexDirection: 'column' }}> 
	      <View style={{flex:1/3, justifyContent: 'flex-end', flexDirection: 'column', alignSelf: 'center'}}>
		<Text>{this.props.summonerName}</Text>
	      </View>
	      <View style={{flex:2/3, flexDirection: 'column', justifyContent: 'flex-start', alignItems:'center'}}>
		  <Image style={styles.image}
			 source={{uri: `https://ddragon.leagueoflegends.com/cdn/6.24.1/img/profileicon/${this.props.iconId}.png` }} />
		<Text>{this.state.inGame ? 'In Game' : 'Not in game' }</Text>
	      </View>
	    </View> 
	);
    }
}
