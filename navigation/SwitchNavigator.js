import React from 'react'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import Login from '/home/aditya/Desktop/IntruApp/app/assets/screens/Login'
import Signup from '/home/aditya/Desktop/IntruApp/app/assets/screens/Signup'
import Profile from '/home/aditya/Desktop/IntruApp/app/assets/screens/Profile'
import Secured from '/home/aditya/Desktop/IntruApp/app/assets/screens/Secured'
import Danger from '/home/aditya/Desktop/IntruApp/app/assets/screens/Danger'
import VideoStream from '/home/aditya/Desktop/IntruApp/app/assets/screens/VideoStream'
import AddUser from '/home/aditya/Desktop/IntruApp/app/assets/screens/AddUser'

const SwitchNavigator = createSwitchNavigator(
    {
        Login: {
            screen: Login
        },
        Signup: {
            screen: Signup
        },
        Profile: {  
            screen: Profile
        },
        VideoStream: {
            screen: VideoStream
        },
        AddUser: {
            screen: AddUser
        },
        Secured: {
            screen: Secured
        },
        Danger: {
            screen: Danger
        }
    },
    {
        initialRouteName: 'Secured'
    }
)

export default createAppContainer(SwitchNavigator)