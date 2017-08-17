import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Landing from './Landing'
import MainPage from './MainPage'

export default class App extends React.Component {

constructor(props) {
    super(props);
    this.state = {
        view: 'landing'
      };
  }

  render() {
    if(this.state.view == 'landing') {
      return (
        <View style={styles.container}>
          <Landing action={() => this.setState({view: 'main'})} />
        </View>
      );
    }
    else if (this.state.view == 'main') {
      return (
        <View style={styles.container}>
          <MainPage />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
