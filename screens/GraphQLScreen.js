import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import { Query, Mutation } from 'react-apollo'
import gql from "graphql-tag";

export default class GraphQLScreen extends Component {
  static navigationOptions = {
    title: 'GraphQL'
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Query query={gql`{
          getAllStudents {
            name,
            gender,
            id
          }
        }`}>
        {({loading, error, data}) => {
          if (loading) return <Text>{JSON.stringify(loading)}</Text>
          if (error) return <Text>{JSON.stringify(error)}</Text>
          if (data) return <View>
            {/* <Text>{JSON.stringify(data)}</Text> */}
            {data.getAllStudents.map(each => {
              return (
                <View key={each.id}>
                  <Text>{each.name}</Text>
                  <Mutation mutation={gql`
                    mutation deleteStudentById ($id: ID!) {
                      deleteStudentById(id: $id) {
                        id
                      }
                    }
                    `} refetchQueries={[{query: gql`{
                      getAllStudents {
                        name,
                        gender,
                        id
                      }
                    }`}]}>
                    {(deleteStudentById, {data}) => {
                      return <Button title="delete" onPress={() => {
                        deleteStudentById({variables: {id: each.id}})
                      }} />
                    } }
                  </Mutation>
                </View>
              )
            })}
          </View>
        } }
        </Query>
      </View>
    )
  }
}
