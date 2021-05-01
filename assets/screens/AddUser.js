import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import UploadImage from './UploadImage'
import Firebase from '/home/aditya/Desktop/IntruApp/app/.expo/config/Firebase'


class AddUser extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                {/* <Text> Add User </Text>
                <Button
                    title="Back to Profile"
                    onPress={() => this.props.navigation.navigate('Secured')} /> */}
                <UploadImage />  
                <Button
                    title="Back to Profile"
                    onPress={() => {
                    this.props.navigation.navigate('Secured')
                    Firebase.firestore().collection('001').doc('status').update({
                        newUser: true,
                      }).then(() => {console.log('User updated!')})}} />  
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default AddUser