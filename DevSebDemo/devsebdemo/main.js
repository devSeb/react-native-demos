/** In order for logging to stream to XDE or the exp CLI you must import the
  * exponent module at some point in your app */
import Exponent from 'exponent';

import React from 'react';
import {AppRegistry, Platform, StatusBar, StyleSheet, View, Text, Navigator} from 'react-native';

// Component

import TaskList from './TaskList';
import TaskForm from './TaskForm';


class DevSebDemo extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      todos: [
        {task: "Tata"},
        {task: "Titi"}
      ]
    };
  }

  componentWillReceiveProps(nextProps) {
    const dataSource = this.state._dataSource.cloneWithRows(nextProps.todos);
    this.setState({datSources});
  }
  onAddStarted() {
    console.log("press button");
    this.nav.push({
      name: 'taskform'
    });
  }

  renderScene(route, nav) {
    switch(route.name){
      case 'taskform':
            return <TaskForm onCancel={this.onCancel.bind(this)} onAdd={this.onAdd.bind(this)} />
      default:
            return (
                <TaskList onAddStarted={this.onAddStarted.bind(this)}
                          todos={this.state.todos}
                          onDone={this.onDone.bind(this)}/>
            )
    }
  }

  configureScene() {
    // Animation bottom to top  *_*
    return Navigator.SceneConfigs.FloatFromBottom;
  }

  onCancel() {
    console.log("cancel form");
    this.nav.pop();
  }
  onAdd(task) {
    console.log("onAdd form", task);
    this.state.todos.push({task});
    this.setState({todos: this.state.todos});
    this.nav.pop();
  }

  onDone(task) {
    //console.log("on done , complete ", task);
    const filteredTodos = this.state.todos.filter((filterTodo) => {
        //console.log("filterTodo", filterTodo);
        return filterTodo.task !== task;
    });
    //console.log("filteredTodos", JSON.stringify(filteredTodos));
    this.setState({todos: filteredTodos});
  }
  render() {
    return (
       <Navigator
           configureScene={this.configureScene}
         initialRoute={{name: 'tasklist', index: 0}}
         ref={ (nav)=> {
            this.nav = nav;
          }
         }
         renderScene={this.renderScene.bind(this)}
         />
    );
  }
}

AppRegistry.registerComponent('main', () => DevSebDemo);
