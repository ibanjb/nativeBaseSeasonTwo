import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Content,  Header, Card, CardItem, Button, Text, Body, StyleProvider  } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MapView from 'react-native-maps';
import HeaderComponent from '../HeaderComponent';
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';

export default class Testing extends React.Component {
  
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
     <StyleProvider style={getTheme(material)}>
         <Container>
        <Header />
        <Content>
          <Card>
            <CardItem header>
              <Text>NativeBase</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                    Card is a pure NativeBase component. Card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options. NativeBase Cards support a wide variety of content, including images, text, list groups, links, and more. Mix and match multiple content types to create the card you need.
                </Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text>GeekyAnts</Text>
            </CardItem>
         </Card>
         <Button light><Text> Light </Text></Button>
         <Button primary><Text> Primary </Text></Button>
         <Button success><Text> Success </Text></Button>
         <Button info><Text> Info </Text></Button>
         <Button warning><Text> Warning </Text></Button>
         <Button danger><Text> Danger </Text></Button>
         <Button dark><Text> Dark </Text></Button>
        </Content>
      </Container>
      </StyleProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      
  },
});

Testing.navigationOptions = {
  tabBarLabel: 'Material',
  tabBarIcon: ({ tintColor, focused }) => (
    <Ionicons
      name={focused ? 'ios-clock' : 'ios-clock-outline'}
      size={26}
      style={{ color: tintColor }}
    />
  ),
};
