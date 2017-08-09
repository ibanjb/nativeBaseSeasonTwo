import React from 'react';
import { StyleSheet, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import HeaderComponent from '../HeaderComponent';
import SocialLogin from './SocialLogin';

export default class Chat extends React.Component {
  
  render() {
    return (
        <Container style={styles.container}>
            <Content>
                <HeaderComponent />
                <SocialLogin />
            </Content>
        </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      
  },
});

Chat.navigationOptions = {
  tabBarLabel: 'Chat',
  tabBarIcon: ({ tintColor, focused }) => (
    <Ionicons
      name={focused ? 'ios-chatboxes' : 'ios-chatboxes-outline'}
      size={26}
      style={{ color: tintColor }}
    />
  ),
};
