import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { View, Text } from 'react-native';
import CoursesHome from './../screens/CoursesHome';
import CourseContent from './../screens/CourseContent';

const AppScreen = createStackNavigator({
    Home: {
        screen: CoursesHome
    },
    CourseDetail: {
        screen: CourseContent
    }
}, {
        initialRouteName: 'Home'
    })


export default createAppContainer(AppScreen);