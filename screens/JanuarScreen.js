import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

export default class JanuarScreen extends Component {
  render() {
    return (
      <View>
        <Text> Hai, Aku Clinton </Text>
        <Button 
          title="Todo"
          onPress={() => this.props.navigation.navigate('Todo')}
        />
      </View>
    )
  }
}
