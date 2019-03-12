import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

export default class AboutScreen extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text> Ini about, made for Active Fox </Text>
        <Text> With love 💓 </Text>
        {/* <Button 
          title="Todo"
          onPress={() => this.props.navigation.navigate('Todo')}
          /> */}
      </View>
    )
  }
}
