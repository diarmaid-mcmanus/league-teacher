import React, {Component} from 'react';
import { TouchableWithoutFeedback, Keyboard, View, TextInput, Picker, Button } from 'react-native';

export class Landing extends Component {
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
	    <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{flex:1, flexDirection: 'column' }}> 
	      <View style={{flex:1, flexDirection: 'column' }}>
		<View style={{flex:1/3, alignItems:'center'}}>
		  <View style={{flex:4}}></View>
		  <View style={{flex:1}}>
		    <TextInput style={{flex:1, alignSelf: 'flex-end'}} placeholder="Summoner Name" />
		  </View>
		</View>
		<View style={{flex:1/3, flexDirection: 'column' }}>
		  <Picker style={{flex:1}} selectedValue={this.state.region} onValueChange={(itemValue, itemIndex) => this.setState({region: itemValue})}>
		    {regionPickers}
		  </Picker> 
		</View>
		<View style={{flex:1/3, flexDirection: 'column' }}>
		  <Button style={{flex:1}} title="Go" accessibilityLabel="Press to store this information within the app as your default account" onPress={this.props.action}/>
		</View>
	      </View>
	    </TouchableWithoutFeedback>
	);
    }
}
