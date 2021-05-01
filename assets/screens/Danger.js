import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground, TouchableOpacity, Button } from "react-native";
import Cctv2 from "../components/Cctv2";
import Sos from "../components/Sos";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

class Danger extends React.Component {
  render() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("/home/aditya/Desktop/IntruApp/app/assets/images/alert.png")}
        resizeMode="contain"
        style={styles.alert}
        imageStyle={styles.alert_imageStyle}
      >
         <Image
          style={styles.intrude}
          resizeMode="contain"
          source={{uri: 'https://firebasestorage.googleapis.com/v0/b/intrusion-65731.appspot.com/o/intruder.jpeg?alt=media&token=53a3a594-b2e9-4aa6-ab66-45f47b9deaf9'}}
        />
        </ImageBackground>
      <View style={styles.mb4Row}>
      <TouchableOpacity 
        style={[styles.conCCTV, styles.mb4]}
        onPress={() => this.props.navigation.navigate('VideoStream')}>
      <Icon name="cctv" style={styles.capCCTV}></Icon>
    </TouchableOpacity> 
        <Sos style={styles.mb5}></Sos>
      </View>
      <Button
                    title="Back to Profile"
                    onPress={() => this.props.navigation.navigate('Secured')} />    
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  alert: {
    width: 442,
    height: 507,
    marginTop: 34,
    marginLeft: -10
  },
  alert_imageStyle: {},
  intrude: {
    width: 259,
    height: 233,
    borderBottomRightRadius: 0,
    marginTop: 265,
    marginLeft: 60
  },
  mb4: {
    height: 65,
    width: 66,
    borderRadius: 8
  },
  mb5: {
    height: 65,
    width: 66,
    borderRadius: 8,
    backgroundColor: "rgba(214,5,5,1)",
    marginLeft: 25
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
  mb4Row: {
    height: 65,
    flexDirection: "row",
    marginTop: 13,
    marginLeft: 100,
    marginRight: 100,
    marginTop: 50
  }
});

export default Danger;
