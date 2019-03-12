import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import TodoScreen from './screens/TodoScreen'

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        {/* <View style={styles.container}> */}
          <TodoScreen />
        {/* </View> */}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
