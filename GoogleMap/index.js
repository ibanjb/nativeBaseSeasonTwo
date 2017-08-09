import React from 'react';
import { StyleSheet, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import HeaderComponent from '../HeaderComponent';
import MapView from 'react-native-maps';

export default class GoogleMap extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.getInitialState();
  }

  getInitialState() {
    return {
      region: {
        latitude: 41.3874043,
        longitude: 2.169854,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      },
    };
  }

  onRegionChange(region) {
    //this.setState({ region });
  }
  render() {
    return (
      <Container style={styles.container}>       
        <Content>
          <HeaderComponent />
          <MapView style={styles.map}
                region={this.state.region}
                onRegionChange={this.onRegionChange}
          />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
      height: '100%',
      width: '100%',
  }
});

GoogleMap.navigationOptions = {
  tabBarLabel: 'Map',
  tabBarIcon: ({ tintColor, focused }) => (
    <Ionicons
      name={focused ? 'ios-map' : 'ios-map-outline'}
      size={26}
      style={{ color: tintColor }}
    />
  ),
};
