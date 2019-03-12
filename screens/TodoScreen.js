import React, { Component } from 'react'
import { Text, 
  View, 
  StyleSheet, 
  Button,
  TextInput,
  KeyboardAvoidingView
 } from 'react-native'

export default class TodoScreen extends Component {
  static navigationOptions = () => ({
    title: 'Todo'
  });

  state = {
    todos : ['Bangun', 'Mandi'],
    newTodo: ''
  }

  addTodo = () => {
    this.setState({
      todos: [...this.state.todos, this.state.newTodo],
      newTodo: ''
    })
  }
  
  render() {
    const { todos } = this.state
    return (
      <KeyboardAvoidingView  behavior="padding" style={s.container}>
        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <Text style={{fontSize: 20}}> Active Fox Rocks! 🦊 </Text>
        </View>
        <View style={{flex: 9, justifyContent: 'center'}}>
          {todos.map((each, i) => <Text key={i}>🐼 {each}</Text>)}
        </View>
        <View>
          <TextInput 
            style={{width: 200, height: 40, borderBottomColor: 'black', borderBottomWidth: 1}} 
            value={this.state.newTodo}
            onChangeText={(text) => this.setState({newTodo: text})}
            />
          <Button 
            title="Add Todo"
            onPress={this.addTodo}
            />
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
