// import React, {Component} from 'react'
// import {Text, View, StyleSheet} from 'react-native'
// import ConNguoi from "./Components/ConNguoi.js"

// export default class App extends Component {
//   renderScene(Navigator){

//   }

//   render() {
//     return (
//       <Navigator initialRoute={name: "mhA"} renderScene={this.renderScene}>
//       </Navigator>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// })

import ManHinhA from './Components/manHinhA'
import ManHinhB from './Components/manHinhB'
import ManHinhC from './Components/manHinhC'
import { createStackNavigator } from 'react-navigation';

const App = createStackNavigator({
  ManHinhA: { screen: ManHinhA },
  ManHinhB: { screen: ManHinhB },
  ManHinhC: { screen: ManHinhC },
});

export default App;