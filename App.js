import React from 'react';
import { StatusBar, Image, StyleSheet, Text, View } from 'react-native';

import { Landing } from './Components/Landing';
import { MainPage } from './Components/MainPage';
import { Opponent } from './Components/Opponent';
import { getSummonerInformation } from './Lib/LeagueApi';

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


export default class App extends React.Component {
    constructor() {
	super();
	this.state = {
	    userInfo: {},
	    appState: states.findUser
	};
    }

    render() {
	this.views = {
	    [states.findUser]: (
		<View style={styles.container}>
		  <Landing
		    action={(username, region) => 
			    getSummonerInformation(username, region)
				.then(userInfo => {
				    this.setState({
					userInfo,
					appState: states.mainPage
				    });
			    })}
			    />
		</View>
	    ),
	    [states.mainPage]: (
		<View style={styles.container}>
		  <MainPage summonerName={this.state.userInfo.summonerName} iconId={this.state.userInfo.profileIconId}/>
		</View>
	    )
	};

	return this.views[this.state.appState];
    }
}


