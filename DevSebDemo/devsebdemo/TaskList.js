/**
 * Created by Administrateur on 29/08/2016.
 */

import React, {PropTypes} from 'react';
import {View, Text, StyleSheet, ListView, TouchableHighlight} from 'react-native';

import TaskRow from './TaskRow';

/** Style **/
const styles = StyleSheet.create({

   container: {
       paddingTop: 50,
       backgroundColor: '#F7F7F7',
       flex: 1,
       justifyContent: 'flex-start'
   },
    bigblue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30
    },
    button: {
      height: 60,
        borderColor: '#05A5D1',
        borderWidth: 2,
        backgroundColor: '#333',
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: '#FAFAFAFA',
        fontSize:20,
        fontWeight: '600'
    }
});


class TaskList extends React.Component {

    static propTypes = {
        todos: PropTypes.array.isRequired,
        onAddStarted : PropTypes.func.isRequired,
        onDone : PropTypes.func.isRequired
    };

    constructor(props,context) {
        super(props, context);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource : ds.cloneWithRows(props.todos)
        };
    }

    componentWillReceiveProps(nextProps){
        const dataSource = this.state.dataSource.cloneWithRows(nextProps.todos);
        this.setState({dataSource: dataSource});
    }

    renderRow(todo) {
        return (
            <TaskRow task={todo.task}  onDone={this.props.onDone} />
        )
    }
    onAddStarted() {
        console.log("press button");
    }

    render() {

        console.log("element " , this.state.source );
        return (
            <View style={styles.container}>
                <Text> hi , this list is a TaskList héhé</Text>
                <ListView
                    key={this.props.todos}
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow.bind(this)}
                    />

                <TouchableHighlight style={styles.button}
                                    onPress={this.props.onAddStarted}>
                    <Text  style={styles.buttonText} >Add one</Text>
                </TouchableHighlight>
            </View>

        );
    }
}


export default TaskList;