import React from 'react';
import { StatusBar, Image, StyleSheet, Text, View } from 'react-native';
import { Skills } from './../Skills';

export default class Opponent extends React.Component {
    render() {
	return (
	    <Skills foo={[{
			img: 'http://i.imgur.com/rN7UbmV.jpg',
			text: 'this is the text'
			},{
			    img: 'http://i.imgur.com/rN7UbmV.jpg',
			    text: 'this is the text'
		    }]} />
	);
    }
}

