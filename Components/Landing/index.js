import React, {Component} from 'react';
import { TouchableWithoutFeedback, Keyboard, View, TextInput, Picker, Button } from 'react-native';

export class Landing extends Component {
    constructor(props) {
 	super(props);
 	this.state = {
    	    region: 'na',
	    username: 'rychiu26'
  	};
    }

    checkUser() {
	this.props.action(this.state.username, this.state.region);
    }

    render() {
	const regions = ['br','eune', 'euw', 'lan', 'las', 'na', 'oce', 
			 'ru', 'tr', 'jp', 'sea', 'kr', 'pbe'];

	const regionPickers = regions.map((region, key) => <Picker.Item key={key} label={region} value={region} />); 
	return (
	    <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{flex:1, flexDirection: 'column' }}> 
	      <View style={{flex:1, flexDirection: 'column' }}>
		<View style={{flex:1/3, flexDirection: 'column', justifyContent: 'flex-end', alignItems:'center'}}>
		    <TextInput value={this.state.username} onChangeText={(value) => this.setState({username: value})} placeholder="Summoner Name" />
		</View>
		<View style={{flex:1/3, flexDirection: 'column' }}>
		  <Picker selectedValue={this.state.region} onValueChange={(itemValue, itemIndex) => this.setState({region: itemValue})}>
		    {regionPickers}
		  </Picker> 
		</View>
		<View style={{flex:1/3, flexDirection: 'column' }}>
		  <Button title="Go" accessibilityLabel="Press to store this information within the app as your default account" onPress={this.checkUser.bind(this)}/>
		</View>
	      </View>
	    </TouchableWithoutFeedback>
	);
    }
}
