import React from 'react';
import { Picker, TextInput, StatusBar, Image, StyleSheet, Text, View } from 'react-native';
import { Skills } from './../Skills';

const styles = {
    opponent: {
	flex:1,
	flexDirection: 'column'
    },
    basicInfo: {
	flex: 1/5,
	flexDirection: 'row'
    },
    basicInfoContainer: {
	flex: 3/4
    },
    basicInfoImage: {
	flex: 1/4
    }
};

const heroes = [
    {
	user: 'foo',
	hero: 'bar'
    },
    {
	user: 'baz',
	hero: 'boo'
    }
];

class BasicInfo extends React.Component {
    render() {
	return (
	    <View style={styles.basicInfo}>
	      <Image resizeMode='contain' source={{uri:'http://i.imgur.com/rN7UbmV.jpg'}} style={styles.basicInfoImage}/>
	      <Image resizeMode='contain' source={{uri:'http://i.imgur.com/rN7UbmV.jpg'}} style={styles.basicInfoImage}/>
	      <Image resizeMode='contain' source={{uri:'http://i.imgur.com/rN7UbmV.jpg'}} style={styles.basicInfoImage}/>
	      <Image resizeMode='contain' source={{uri:'http://i.imgur.com/rN7UbmV.jpg'}} style={styles.basicInfoImage}/>
	    </View>
	);
    }
}

class HeroPicker extends React.Component {
    constructor(props) {
	super(props);
	this.state = {
	    hero: heroes[0]
	};
    }
    render() {
	const heroPickers = heroes.map((player, key) => <Picker.Item key={key} label={`${player.user} -- ${player.hero}`} value={`${player.user} -- ${player.hero}`} />); 
	return (
	    <View style={{flex:2/4}}> 
	      <Picker selectedValue={this.state.hero} onValueChange={(itemValue, itemIndex) => this.setState({hero: itemValue})}>
		{heroPickers}
	      </Picker> 
	    </View> 
	);
    }
}

export class Opponent extends React.Component {
    render() {
	return (
	    <View style={styles.opponent}>
	      <View style={{flex:1/5}}>
		<HeroPicker />
	      </View>
	      <View style={{flex:1/5}}>
	      	<BasicInfo />
	      </View>
	      <View style={{flex:3/5}}>
		<Skills foo={[{
			    img: 'http://i.imgur.com/rN7UbmV.jpg',
			    text: 'this is the text'
			    }, {
				img: 'http://i.imgur.com/rN7UbmV.jpg',
				text: 'this is the text'
			    }, {
				img: 'http://i.imgur.com/rN7UbmV.jpg',
				text: 'this is the text'
			    }, {
				img: 'http://i.imgur.com/rN7UbmV.jpg',
				text: 'this is the text'
			}]} />
	      </View>
	    </View>
	);
    }
}

