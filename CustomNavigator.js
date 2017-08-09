import React from 'react';
import { Button, Platform, ScrollView, StyleSheet } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Calendar from './Calendar';
import GoogleMap from './GoogleMap';
import Chat from './Chat';
import Settings from './Settings';
import Testing from './Testing';

const CustomNavigator = TabNavigator(
  {
    Calendar: {
      screen: Calendar,
      path: '',
    },
    GoogleMap: {
      screen: GoogleMap,
      path: 'googlemap',
    },
    Chat: {
      screen: Chat,
      path: 'chat',
    },
    Settings: {
      screen: Settings,
      path: 'settings',
    },    
    Test: {
      screen: Testing,
      path: 'testing',
    },
  },
  {
    tabBarOptions: {
      activeTintColor: Platform.OS === 'ios' ? '#e91e63' : '#fff',
    },
  }
);

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,    
  },
});

export default CustomNavigator;
