import React, {Component} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './src/AppStack';

export default class App extends React.Component {
    render() {
        return (
            <NavigationContainer>
                <AppStack />
            </NavigationContainer>
        );
    }
}
