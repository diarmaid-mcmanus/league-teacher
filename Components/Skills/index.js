import React from 'react';
import { ListView, Image, StyleSheet, Text, View, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    skill: {
	flex:1,
	flexDirection: 'row'

    },
    skillRow: {
	height: 80
    },
    skills: {
	flex:1,
	flexDirection: 'column'
    },
    skillText: {
	flex:3/4,
	paddingLeft: 5
    }
});

class Skill extends React.Component {
    render() {
	/* Fuck flexboxes and their automatic bullshit centering */
	const dimensions = Dimensions.get('window');
	const imageWidth = Math.round(dimensions.width * 0.25);
	const imageHeight = Math.round(dimensions.width * 0.25);
	
	return (
	    <View style={styles.skill}>
	      <Image resizeMode='contain' source={{uri:this.props.skillImg}} style={{width: imageWidth, height: imageHeight, borderWidth: 1}}/>
	      <Text style={styles.skillText}>{this.props.description}</Text>
	    </View>
	);
    }
}

export class Skills extends React.Component {
    render() {
	const skills = this.props.foo.map((skill, key) => <Skill key={key} skillImg={skill.img} description={skill.text} />);
	return (
	    <View style={styles.skills}>
	      {skills}
	    </View>
	);
    };
}
