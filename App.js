import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import CustomNavigator from './CustomNavigator';
import { Button, Spinner } from 'native-base';

const splashScreen = require('./img/splash.png');

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
    }
  }

  fakeCallToServer() {
    this.setState({
      isLoaded: true,
    });
  }

  renderNavigator() {
    return (
      <CustomNavigator />
    );
  }

  renderSplashScreen() {
    return (
       <View style={styles.splashContainer}> 
          <Button onPress={this.fakeCallToServer.bind(this)} style={styles.button} >
            <Image source={splashScreen}/>  
          </Button>
          <View style={styles.spinner}>
            <Spinner color='white' />
          </View>        
        </View>
    );
  }

  render() {
    const isLoaded = this.state.isLoaded;
    if (isLoaded) {
      return this.renderNavigator();
    } else {
      return this.renderSplashScreen();
    }        
  }
}

const styles = StyleSheet.create({
  splashContainer: {
      height: '100%',
      width: '100%',
      backgroundColor: '#009AFF',
      justifyContent: 'center',
      alignItems: 'center',
  },
  spinner: {
    paddingTop: 100,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 130,
    height: 100,
  }
});
