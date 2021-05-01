import React, { Component, setState } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  ImageBackground,
  TouchableOpacity, Button
} from "react-native";
import MaterialCardWithoutImage from "../components/MaterialCardWithoutImage";
import Cctv from "../components/Cctv";
import Unlock from "../components/Unlock";
import Adduser from "../components/Adduser";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Moment from 'react-moment';
import { Text } from 'react-native';
import Firebase from '/home/aditya/Desktop/IntruApp/app/.expo/config/Firebase'

class Secured extends React.Component {
 state = {
    lastEntry: 0,
    lastExit: 0,
    total: '0',
    intrude: false
}


componentDidMount()
{
 this.init()
}

async init()
{
  const dat = await Firebase.firestore().collection('001').doc('status').get()
  const pers = dat.data().person
  const lastEnt = dat.data().lastEntry.seconds*1000
  // var d = new Date(lastEnt)
  // console.log(d)
  const lastEx = dat.data().lastExit.seconds*1000
  const intr = dat.data().intrude
  this.setState({
    lastEntry: lastEnt,
    lastExit: lastEx,
    total: pers,
    intrude: intr
  });

}
  render() {
    // console.log(this.state.lastEntry)
    const t1 = new Date(this.state.lastEntry)
    const ts1 = t1.toString();
    const t2 = new Date(this.state.lastExit)
    const ts2 = t2.toString();
    const intrude = this.state.intrude
    if (intrude) {
      this.props.navigation.navigate('Danger')
    }
    // console.log(ts1)

  return (
    <View style={styles.container}>
      <StatusBar animated />
      <View style={styles.secureStack}>
        <ImageBackground
          source={require("/home/aditya/Desktop/IntruApp/app/assets/images/secure.png")}
          resizeMode="contain"
          style={styles.secure}
          imageStyle={styles.secure_imageStyle}
          >
          <MaterialCardWithoutImage
            titleStyle = "people in the house"
            style={styles.materialCardWithoutImage}
          ></MaterialCardWithoutImage>
          <View style={styles.materialCardWithoutImage1Row}>
            <MaterialCardWithoutImage
              titleStyle="last entry"
              style={styles.mi1}
            ></MaterialCardWithoutImage>
            <MaterialCardWithoutImage
              titleStyle="last exit"
              style={styles.mi2}
            >
              
            </MaterialCardWithoutImage>
            </View>
          
        </ImageBackground>
        
          
        {/* <Cctv style={styles.mb1}></Cctv> */}
        <TouchableOpacity 
        style={[styles.conCCTV, styles.mb1]}
        onPress={() => this.props.navigation.navigate('VideoStream')}>
      <Icon name="cctv" style={styles.capCCTV}></Icon>
    </TouchableOpacity> 
        <Unlock style={styles.mb2}></Unlock>
        <TouchableOpacity 
        style={[styles.conUser, styles.mb3]}
        onPress={() => this.props.navigation.navigate('AddUser')}>
      <Icon name="account-box-multiple" style={styles.capUser}></Icon>
    </TouchableOpacity>
    <View style={styles.time1}>
    <Text> {ts1} </Text>
    </View>
    <View style={styles.time2}>
    <Text> {ts2} </Text>
    </View>
    <MaterialCardWithoutImage
            titleStyle = {this.state.total}
            style={styles.person}
          ></MaterialCardWithoutImage>
      </View>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#000000",
    borderStyle: "solid",
    borderBottomRightRadius: 0
  },
  secure: {
    top: 0,
    left: 0,
    width: 733,
    height: 543,
    position: "absolute"
  },
  secure_imageStyle: {},
  materialCardWithoutImage: {
    height: 74,
    width: 221,
    textAlign: "center",
    textAlignVertical: "center",
    backgroundColor: "rgba(207,216,220,1)",
    opacity: 0.94,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#000000",
    borderStyle: "solid",
    overflow: "hidden",
    marginTop: 301,
    marginLeft: 182
  },
  mi1: {
    height: 57,
    width: 134,
    textAlign: "center",
    textAlignVertical: "center",
    backgroundColor: "rgba(184,233,134,1)",
    opacity: 0.94,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#000000",
    borderStyle: "solid",
    overflow: "hidden"
  },
  mi2: {
    height: 57,
    width: 134,
    textAlign: "center",
    textAlignVertical: "center",
    backgroundColor: "rgba(184,233,134,1)",
    opacity: 0.94,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#000000",
    borderStyle: "solid",
    overflow: "hidden",
    marginLeft: 26
  },
  time1: {
    height: 57,
    width: 144,
    textAlign: "center",
    alignContent: "center",
    textAlignVertical: "center",
    // backgroundColor: "rgba(184,233,134,1)",
    opacity: 0.94,
    borderRadius: 8,
    borderWidth: 0.1,
    borderColor: "#000000",
    borderStyle: "solid",
    // overflow: "hidden",
    marginLeft: 178 ,
    marginTop: 486
  },
  time2: {
    height: 57,
    width: 144,
    textAlign: "center",
    textAlignVertical: "center",
    // backgroundColor: "rgba(184,233,134,1)",
    opacity: 0.94,
    borderRadius: 8,
    borderWidth: 0.1,
    borderColor: "#000000",
    borderStyle: "solid",
    // overflow: "hidden",
    marginLeft: 342,
    marginTop: -57
  },
  materialCardWithoutImage1Row: {
    height: 67,
    flexDirection: "row",
    marginTop: 29,
    marginLeft: 186,
    marginRight: 253
  },
  mb1: {
    height: 65,
    width: 68,
    position: "absolute",
    left: 212,
    top: 600,
    borderRadius: 8
  },
  mb2: {
    height: 66,
    width: 68,
    position: "absolute",
    top: 600,
    backgroundColor: "rgba(76,175,80,1)",
    borderRadius: 8,
    left: 299
  },
  mb3: {
    height: 66,
    width: 68,
    position: "absolute",
    left: 388,
    top: 600,
    backgroundColor: "rgba(113,38,47,1)",
    borderRadius: 8
  },
  person: {
    height: 74,
    width: 54,
    textAlign: "center",
    textAlignVertical: "center",
    // backgroundColor: "rgba(184,233,134,1)",
    opacity: 0.94,
    borderRadius: 8,
    borderWidth: 0.1,
    borderColor: "#000000",
    borderStyle: "solid",
    // overflow: "hidden",
    marginLeft: 422,
    marginTop: -242
  },
  secureStack: {
    width: 733,
    height: 607,
    marginTop: 11,
    marginLeft: -150
  },
  conCCTV: {
    backgroundColor: "#3F51B5",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 2
  },
  capCCTV: {
    color: "#fff",
    fontSize: 24
  },
  conUser: {
    backgroundColor: "#3F51B5",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 2
  },
  capUser: {
    color: "#fff",
    fontSize: 24
  }
});

export default Secured;
