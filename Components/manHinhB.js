import React, {Component} from "react"
import {View, Text} from "react-native"

export default class manHinhB extends Component{
    static navigationOptions = {
		title: 'Welcome B',
	};
	render(){
        console.log(this.props)
		return(
			<View style={{flex: 1, backgroundColor: "yellow"}}>
				<Text style={{fontSize: 200, color: "white"}}>C</Text>
			</View>
		)
	}
}
