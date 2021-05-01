import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'


class VideoStream extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> Video Stream </Text>
                <Button
                    title="Back to Alert"
                    onPress={() => this.props.navigation.navigate('Danger')} />
                 <Button
                    title="Back to Profile"
                    onPress={() => this.props.navigation.navigate('Secured')} />    
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

export default VideoStream