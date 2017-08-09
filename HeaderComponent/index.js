import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MapView from 'react-native-maps';

export default class HeaderComponent extends React.Component {  
  
  render() {
    const  imgBackground = require('../img/background.png');
    return (
      <View style={styles.container}>
        <Image source={imgBackground} style={styles.backgroundImage}>
          <Text style={styles.text}> 
            This is the header component
          </Text>
        </Image>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {      
  },
  text: {
    marginLeft: 20,
    paddingTop: 60,
    fontSize: 18,
    fontWeight: '600',
    color: '#FAFAFA',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    height: 120,
  }
});
