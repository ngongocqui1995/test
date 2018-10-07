import React, {Component} from "react"
import {View, Text, NavigatorIOS} from "react-native"

class LogoTitle extends React.Component {
	render() {
	  return (
		<Text>quy</Text>
	  );
	}
  }

export default class manHinhA extends Component{
	static navigationOptions = {
		title: 'Welcome A',
		headerTitle: <LogoTitle />,
		headerStyle: {
			backgroundColor: '#f4511e',
			fontSize: 20,
			height: 10,
			width: 100
		},
		headerTintColor: '#fff',
		headerTitleStyle: {
			fontWeight: 'bold',
			color: "Red",
		},
	};
	render(){
		const { navigate } = this.props.navigation;
		return(
			<View style={{flex: 1, backgroundColor: "blue"}}>
				<Text style={{fontSize: 200, color: "white"}} onPress={() =>this.props.navigation.push('ManHinhB')}>A</Text>
				<Text style={{fontSize: 200, color: "white"}} onPress={() =>navigate('ManHinhB', { name: 'Jane' })}>A</Text>
				<Text style={{fontSize: 200, color: "white"}} onPress={() =>navigate('ManHinhB', { name: 'Jane' })}>A</Text>
				<Text style={{fontSize: 200, color: "white"}} onPress={() =>navigate('ManHinhB', { name: 'Jane' })}>A</Text>
				<Text style={{fontSize: 200, color: "white"}} onPress={() =>navigate('ManHinhB', { name: 'Jane' })}>A</Text>
				<Text style={{fontSize: 200, color: "white"}} onPress={() =>navigate('ManHinhB', { name: 'Jane' })}>A</Text>
				<Text style={{fontSize: 200, color: "white"}} onPress={() =>navigate('ManHinhB', { name: 'Jane' })}>A</Text>
				<Text style={{fontSize: 200, color: "white"}} onPress={() =>navigate('ManHinhB', { name: 'Jane' })}>A</Text>
				<Text style={{fontSize: 200, color: "white"}} onPress={() =>navigate('ManHinhB', { name: 'Jane' })}>A</Text>
				<Text style={{fontSize: 200, color: "white"}} onPress={() =>navigate('ManHinhB', { name: 'Jane' })}>A</Text>
			</View>
		)
	}
}
