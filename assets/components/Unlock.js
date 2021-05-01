import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Firebase from '/home/aditya/Desktop/IntruApp/app/.expo/config/Firebase'




function Unlock(props) {
 
  return (
    <TouchableOpacity 
    style={[styles.container, props.style]}
    onPress={() =>  Firebase.firestore().collection('001').doc('status').update({
      lock: false,
    }).then(() => {console.log('User updated!')})}>
      <Icon name="lock-open" style={styles.caption}></Icon>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
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
  caption: {
    color: "#fff",
    fontSize: 24
  }
});

export default Unlock;
