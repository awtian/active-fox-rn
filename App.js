import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import RootNavigation from './navigations/RootNavigator'
// GraphQL
import { ApolloProvider } from 'react-apollo'
import client from './graphql/client'

export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <RootNavigation />
      </ApolloProvider>
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
