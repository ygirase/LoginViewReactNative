/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';

import LoginView from './Controllers/LoginView'
import {LoginStyles} from './Style/LoginStyles'


var ReactProject = React.createClass({
    render: function() {
        return (
            <NavigatorIOS
                style={LoginStyles.NavigationContainer}
                initialRoute={{
                title: "Login Form",
                component: LoginView,
            }} />
        );
    }
});
AppRegistry.registerComponent('loginViewReatNative', () => ReactProject);
