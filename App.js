/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import CoursesHome from './src/screens/CoursesHome';
import CourseContent from './src/screens/CourseContent';
import AppNavigator from './src/navigation/AppNavigator';



const App = () => {
  return (

    <AppNavigator />

  );
};



export default App;
