import React from 'react';
import { StyleSheet, Text, View, ListView, TouchableHighlight } from 'react-native';
import TaskRow from './TaskRow';

export default class TaskList extends React.Component {
  static navigationOptions = {
    title: 'TaskList',
  };

  constructor(props, context) {
    super(props, context);
    const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2,
    });
    this.state = {
        dataSource: ds.cloneWithRows(props.todos),
    };
  }
  renderRow(todo) {
    return(
        <TaskRow todo={todo} />
    );
  }

  render() {
    return (
      <View style={styles.container}>        
        <ListView             
            dataSource={this.state.dataSource}
            key={this.props.todos}
            renderRow={this.renderRow.bind(this)}
        />        
        <TouchableHighlight 
            style={styles.button}
            onPress={this.props.onAddStarted}
        >
            <Text style={styles.buttonText}> 
                Add one 
            </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

TaskList.propTypes = {
    onAddStarted: React.PropTypes.func.isRequired,
    todos: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
};

const styles = StyleSheet.create({
  container: {    
    backgroundColor: '#F7F7F7',
  },
  button: {
    height: 60,
    borderColor: '#05A5D1',
    borderWidth: 2,
    backgroundColor: '#333',
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FAFAFA',
    fontSize: 20,
    fontWeight: '600',
  },
});
