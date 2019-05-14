import React from 'react'
import { createDrawerNavigator, createAppContainer } from 'react-navigation'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Videos from './components/pages/videos'
import Books from './components/pages/books'



export default createAppContainer(createDrawerNavigator(
  {
    "Screen1": {
      screen: Videos,
      navigationOptions: {
        drawerLabel: 'Videos',
        drawerIcon: ({ tintColor }) => (
          <MaterialIcons name="grade" size={24} style={{ color: tintColor }} />
        )
      }
    },
    "Screen2": {
      screen: Books,
      navigationOptions: {
        drawerLabel: 'Books',
        drawerIcon: ({ tintColor }) => (
          <MaterialIcons name="favorite" size={24} style={{ color: tintColor }} />
        )
      }
    }
  },
  {
    initialRouteName: "Screen1",
    drawerBackgroundColor: '#0070c0',
    contentOptions: {
      activeBackgroundColor: '#0095ff',
      activeTintColor: 'white',
      inactiveTintColor: 'white',
      labelStyle: {
        fontSize: 20,
      },
      itemsContainerStyle: {
        marginVertical: 65
      }
    }
  }
))