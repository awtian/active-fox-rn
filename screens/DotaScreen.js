import React, { Component } from 'react'
import { Text, View, FlatList, Button, Modal, TouchableOpacity } from 'react-native'
import { MapView } from 'expo'


export default class DotaScreen extends Component {
  state = {
    heroes: [],
    show: false
  }

  componentDidMount = async() => {
    const res = await fetch('https://api.opendota.com/api/heroStats')
    const json = await res.json()
    this.setState({
      heroes: json
    })

  }

  toggleModal = () => {
    this.setState({show: !this.state.show})
  }

  render() {
    return (
      
      <View style={{flex: 1}}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.show}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <TouchableOpacity onPress={this.toggleModal} style ={{flex: 1}}>
            <View style={{backgroundColor:'rgba(33,33,33,0.4)' ,marginTop: 22, flex:1, alignItems: 'center', justifyContent: 'center'}}>
            </View>
          </TouchableOpacity>
          <View style={{backgroundColor: 'white', borderRadius: 10, padding: 30}}>
              <Text>Hello World!</Text>
              <Button 
              title="toggle"
              onPress={this.toggleModal}
              />
          </View>
        </Modal>
        <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        />
        <Button 
          title="Hello"
          onPress={this.toggleModal}
          />
        {/* <Text> {JSON.stringify(this.state.heroes)} </Text> */}
        {/* {this.state.heroes.map((hero) => <Text>{JSON.stringify(hero)}</Text>)} */}
        <FlatList
          style={{flex: 1}}
          data={this.state.heroes}
          // numColumns={2}
          initialNumToRender={10}
          renderItem={({item}) => <Text style={{padding: 10}}>{JSON.stringify(item)}</Text>}
          />
      </View>
    )
  }
}
