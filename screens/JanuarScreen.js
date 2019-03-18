import React, { Component } from 'react'
import { Text, SafeAreaView, Button } from 'react-native'

export default class JanuarScreen extends Component {
  render() {
    return (
      <SafeAreaView>
        <Text> Hai, Aku Clinton </Text>
        <Button 
          title="Todo"
          onPress={() => this.props.navigation.navigate('Todo')}
        />
        <Button 
          title="Doto"
          onPress={() => this.props.navigation.navigate('Doto')}
        />
      </SafeAreaView>
    )
  }
}
