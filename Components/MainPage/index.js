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
    }
    render() {
	if (!this.props.inGame) this.props.inGameCheck(this.props.userInfo.summonerId, this.props.region);
	return (
	    <View style={{flex:1, flexDirection: 'column' }}> 
	      <View style={{flex:1/3, justifyContent: 'flex-end', flexDirection: 'column', alignSelf: 'center'}}>
		<Text>{this.props.userInfo.summonerName}</Text>
	      </View>
	      <View style={{flex:2/3, flexDirection: 'column', justifyContent: 'flex-start', alignItems:'center'}}>
		  <Image style={styles.image}
			 source={{uri: `https://ddragon.leagueoflegends.com/cdn/7.16.1/img/profileicon/${this.props.userInfo.profileIconId}.png` }} />
		<Text>{this.props.inGame ? 'In Game' : 'Not in game' }</Text>
	      </View>
	    </View> 
	);
    }
}
