import React from 'react';
import { StyleSheet, TouchableHighlight, TextInput, View } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MapView from 'react-native-maps';
import HeaderComponent from '../HeaderComponent';

export default class Settings extends React.Component {
  
  constructor(props, context) {
    super(props, context);

    this.state = {
        task: '',
    };
  }

  onAcceptPress() {
    console.log('on accept press');
  }

  onCancelPress() {
    console.log('on cancel press');
  }

  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <HeaderComponent />
          <View style={styles.innerContainer}>
            <TextInput style={styles.input} /> 

            <TouchableHighlight style={styles.button} onPress={this.onAcceptPress.bind(this)}>
              <Text style={styles.buttonText}> 
                Add 
              </Text>
            </TouchableHighlight>

            <TouchableHighlight style={[styles.button, styles.cancelButton]} onPress={this.onCancelPress.bind(this)}>
              <Text style={styles.buttonText}> 
                Cancel 
              </Text>
            </TouchableHighlight>
          </View>
        </Content>
      </Container>      
    );
  }
}

const styles = StyleSheet.create({
  container: {
      
  },
  innerContainer: {
      paddingTop: 60,
      flex: 1,
      justifyContent: 'flex-start',
      backgroundColor: '#F7F7F7',
  },
  input: {
      borderWidth: 1,
      borderColor: '#D7D7D7',
      height: 50,
      marginLeft: 10,
      marginRight: 10,
      padding: 15,
      borderRadius: 3,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FAFAFA',
  },
  button: {
    height: 45,
    alignItems: 'stretch',
    backgroundColor: '#05A5D1',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelButton: {
    backgroundColor: '#666',    
  },
});

Settings.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ tintColor, focused }) => (
    <Ionicons
      name={focused ? 'ios-settings' : 'ios-settings-outline'}
      size={26}
      style={{ color: tintColor }}
    />
  ),
};
