import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import HeaderComponent from '../HeaderComponent';
import TaskList from './TaskList';

//const backgroundImage = require('../img/bakground.png');

export default class Calendar extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
        todos: [{
          'task': 'Geometric',
          'image': 'geometric',
          'numberOfLikes': 20,
          'numberOfComments': 68,
          'distance': '6km',
        }, {
          'task': 'Circles',
          'image': 'circles',
          'numberOfLikes': 15,
          'numberOfComments': 35,
          'distance': '24km',
        }, {
          'task': 'Blue',
          'image': 'blue',
          'numberOfLikes': 10,
          'numberOfComments': 24,
          'distance': '45km',
        }, {
          'task': 'Stars',
          'image': 'stars',
          'numberOfLikes': 5,
          'numberOfComments': 128,
          'distance': '108km',
        }],
    };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
  }
  onAddStarted() {
    console.log('on add started');
    this.props.navigation.navigate('Settings');
  }

  render() {
    return (
      <Container style={styles.container}>       
        <Content>
          <HeaderComponent />
          <TaskList onAddStarted={this.onAddStarted.bind(this)} todos={this.state.todos} />          
        </Content>
      </Container>
      
    );
    //<Image source={require('../img/background.png')} style={styles.imageBackground}>           
    //</Image>
  }
}

const styles = StyleSheet.create({
  container: {      
  },
  imageBackground: {
    resizeMode: 'cover'
  },
});

Calendar.navigationOptions = {
  tabBarLabel: 'Calendar',
  tabBarIcon: ({ tintColor, focused }) => (
    <Ionicons
      name={focused ? 'ios-calendar' : 'ios-calendar-outline'}
      size={26}
      style={{ color: tintColor }}
    />
  ),
};