import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

const imageSampleThumb = require("../img/thumbnail.png");

export default class TaskRow extends React.Component {
  constructor(props, context) {
    super(props, context);    
    this.state = {
      images: {
        geometric: require("../img/geometric.jpg"),
        circles: require("../img/circles.jpg"),
        blue: require("../img/blue.jpg"),
        stars: require("../img/stars.jpg"),
      },
    }
  }
  render() {
    return (
        <Card>
          <CardItem>
            <Left>
                <Thumbnail square small source={imageSampleThumb}/>
              <Body>
                <Text>{this.props.todo.task}</Text>
                <Text note>Barcelona</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image source={this.state.images[this.props.todo.image]} style={{height: 200, width: null, flex: 1}}/>
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent>
                <Icon active name="thumbs-up" />
                <Text> {this.props.todo.numberOfLikes} Likes</Text>
              </Button>
            </Left>
            <Body>
              <Button transparent>
                <Icon active name="chatbubbles" />
                <Text> {this.props.todo.numberOfComments} Comments</Text>
              </Button>
            </Body>
            <Right>
              <Text style={styles.distance}>
                {this.props.todo.distance}
              </Text>
            </Right>
          </CardItem>
        </Card>
    );
  }
}

TaskRow.propTypes = {
    todo: React.PropTypes.shape({
        task: React.PropTypes.string.isRequired,
    }).isRequired,
};

const styles = StyleSheet.create({
  cardContainer: {
    height: 300,
  },
  container: {
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: '#E7E7E7',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 20,
      marginLeft: 20,
      marginRight: 20,
  },
  label: {
    fontSize: 20,
    fontWeight: '300',
  },
  distance: {
    borderRadius: 5,
    backgroundColor: '#EAEAEA',
    padding: 5,
  },
});
