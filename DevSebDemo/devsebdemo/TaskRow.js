/**
 * Created by Administrateur on 29/08/2016.
 */

import React, {Component, PropTypes} from 'react';
import { Text, StyleSheet, View, TouchableHighlight } from 'react-native';


/** Style **/
const styles = StyleSheet.create({

    container: {
        backgroundColor:'#fff',
        borderWidth: 1,
        borderColor: '#E7E7E7',
        padding: 20,
        flex: 1,
        flexDirection: 'row',
        justifyContent : 'space-between',
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20
    },
    label : {
        fontSize: 20,
        fontWeight: '300'
    },
    doneButton: {
        borderRadius: 5,
        backgroundColor:'#EAEAEA',
        padding: 5
    }
});


class TaskRow extends Component {

    static PropTypes = {
        task : PropTypes.string,
        onDone : PropTypes.func.isRequired
    };

    constructor(props, context) {
    super(props, context)

    }

    onDonePressed(){
        console.log("taskRow onDonePressed");
        this.props.onDone(this.props.task);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.label}> {this.props.task} </Text>
                <TouchableHighlight style={styles.doneButton}
                                    onPress={this.onDonePressed.bind(this)}>
                    <Text>Done</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

export default TaskRow;