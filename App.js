import React from 'react';
import { StatusBar, Image, StyleSheet, Text, View } from 'react-native';

import { Opponent } from './Components/Opponent';

export default class App extends React.Component {
    render() {
	return (
	    <View style={styles.container}>
	      <StatusBar hidden={true} />
	      <Opponent />
	    </View>
	);
    }
}


const styles = StyleSheet.create({
    container: {
	flex: 1
    }
});
