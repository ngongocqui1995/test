import React, { Component } from 'react'
import {View, Text ,StyleSheet, TouchableOpacity} from "react-native"

export default class ConNguoi extends Component {
  constructor(props){
    super(props)
    this.state = {
      chieucao: 0
    }
    this.onClick = this.onClick.bind(this)
  }

  onClick(){
    this.setState({chieucao: this.state.chieucao + 100})
  }

  render() {
    return (
      <TouchableOpacity onPress={this.onClick}>
        <Text style={styles.container}>Tôi là con người</Text>
        <Text style={styles.container}>{this.state.chieucao}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "yellow",
    margin: 20,
  }
})
 