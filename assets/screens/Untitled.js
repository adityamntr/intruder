import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  ImageBackground
} from "react-native";
import MaterialCardWithoutImage from "../components/MaterialCardWithoutImage";

function Untitled(props) {
  return (
    <View style={styles.container}>
      <StatusBar animated />
      <View style={styles.imageStack}>
        <ImageBackground
          source={require("/home/aditya/Desktop/IntruApp/app/assets/images/secure.png")}
          resizeMode="contain"
          style={styles.image}
          imageStyle={styles.image_imageStyle}
        >
          <MaterialCardWithoutImage
            titleStyle="4 person inside house "
            style={styles.materialCardWithoutImage}
          ></MaterialCardWithoutImage>
          <View style={styles.materialCardWithoutImage1Row}>
            <MaterialCardWithoutImage
              titleStyle="last entry:"
              style={styles.materialCardWithoutImage1}
            ></MaterialCardWithoutImage>
            <MaterialCardWithoutImage
              titleStyle="last exit:"
              style={styles.materialCardWithoutImage2}
            ></MaterialCardWithoutImage>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
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
  image: {
    top: 0,
    left: 0,
    width: 733,
    height: 543,
    position: "absolute"
  },
  image_imageStyle: {},
  materialCardWithoutImage: {
    height: 85,
    width: 308,
    backgroundColor: "rgba(207,216,220,1)",
    opacity: 0.94,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: "#000000",
    borderStyle: "solid",
    overflow: "hidden",
    marginTop: 308,
    marginLeft: 179
  },
  materialCardWithoutImage1: {
    height: 67,
    width: 134,
    backgroundColor: "rgba(184,233,134,1)",
    opacity: 0.94,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: "#000000",
    borderStyle: "solid",
    overflow: "hidden"
  },
  materialCardWithoutImage2: {
    height: 67,
    width: 134,
    backgroundColor: "rgba(184,233,134,1)",
    opacity: 0.94,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: "#000000",
    borderStyle: "solid",
    overflow: "hidden",
    marginLeft: 10
  },
  materialCardWithoutImage1Row: {
    height: 67,
    flexDirection: "row",
    marginTop: 19,
    marginLeft: 189,
    marginRight: 266
  },
  icon: {
    top: 148,
    left: 703,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 40
  },
  imageStack: {
    width: 743,
    height: 543,
    marginTop: 11,
    marginLeft: 60
  }
});

export default Untitled;
