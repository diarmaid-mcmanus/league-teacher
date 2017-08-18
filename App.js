import React from 'react';
import { StatusBar, Image, StyleSheet, Text, View } from 'react-native';

import { Landing } from './Components/Landing';
import { MainPage } from './Components/MainPage';
import { Opponent } from './Components/Opponent';

const states = {
    findUser: Symbol(),
    mainPage: Symbol(),
    inGame: Symbol()
};

const styles = StyleSheet.create({
    container: {
	flex: 1
    }
});

function findUser(username) {
    return states.mainPage;
}

export default class App extends React.Component {
    constructor() {
	super();
	this.views = {
	    [states.findUser]: (
		<View style={styles.container}>
		  <Landing action={_ => this.setState({appState: findUser()})}/>
		</View>
	    ),
	    [states.mainPage]: (
		<View style={styles.container}>
		  <MainPage />
		</View>
	    )
	};
	this.state = {
	    appState: states.findUser
	};
    }

    render() {
	return this.views[this.state.appState];
    }
}


