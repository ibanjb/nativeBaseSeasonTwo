import React from 'react';
import { StyleSheet, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Text } from 'native-base';
import HeaderComponent from '../HeaderComponent';
import Zocial from 'react-native-vector-icons/Zocial';

export default class SocialLogin extends React.Component {
  
  render() {
    return (
        <View style={styles.innerContainer}>
            <Text> This is the chat component</Text>

            <Text style={styles.signin}> 
                Sign in with Facebook 
                <Zocial
                    name='facebook'
                    size={26}
                    style={{ color: '#e91e63', backgroundColor:'transparent'  }}
                />
            </Text>
            
            <Text style={styles.signin}> 
                Sign in with Google+ 
                <Zocial
                    name='google'
                    size={26}
                    style={{ color: '#e91e63' }}
                />
            </Text>
            <Text style={styles.signin}> 
                Sign in with Twitter 
                <Zocial
                    name='twitter'
                    size={26}
                    style={{ color: '#e91e63' }}
                />
            </Text>
            
            <Text style={styles.signin}> 
                Sign in with Skype 
                <Zocial
                    name='skype'
                    size={26}
                    style={{ color: '#e91e63' }}
                />
            </Text>
        </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
      
  },
  innerContainer: {
    paddingTop: 60,
    backgroundColor: '#F7F7F7',
  },
  signin: {
      marginTop: 20,
      marginLeft: 20,
      backgroundColor: '#F7F7F7',
      width: '50%',
  },
});