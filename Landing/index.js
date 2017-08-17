import React, {Component} from 'react';
import { View, TextInput, Picker, Button } from 'react-native';

export default class Landing extends Component {
	constructor(props) {
 		super(props);
 		this.state = {
    		region: 'br'
  		};
	}

	render() {
		const regions = ['br','eune', 'euw', 'lan', 'las', 'na', 'oce', 
			'ru', 'tr', 'jp', 'sea', 'kr', 'pbe'];

		const regionPickers = regions.map((region, key) => <Picker.Item key={key} label={region} value={region} />); 

		return (
		<View style={{flex:1, flexDirection: 'column', padding: 100 }}> 
			<TextInput style={{ height: 40, width: 220 }} placeholder="Summoner Name" />
			<Picker selectedValue={this.state.region} onValueChange={(itemValue, itemIndex) => this.setState({region: itemValue})}>
				{regionPickers}
			</Picker> 
			<Button title="Go" accessibilityLabel="Press to store this information within the app as your default account" />
		</View> 
		);
	}
}