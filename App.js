import { StatusBar } from 'expo-status-bar';
import React from 'react';
import SwitchNavigator from '/home/aditya/Desktop/IntruApp/app/navigation/SwitchNavigator'
import Firebase from '/home/aditya/Desktop/IntruApp/app/.expo/config/Firebase'

import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

export default class App extends React.Component {

  state =
    {
        intrude: false
    }

async init()
{
    const dat = await Firebase.firestore().collection('001').doc('status').get()
    const toggle = dat.data().intrude
    console.log(toggle)
    this.setState({
    intrude: toggle
    });
    console.log(this.state.intrude)
}

  render() {
    this.init()
      return <SwitchNavigator />
  }
}