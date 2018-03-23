import React from 'react';
import { StackNavigator } from 'react-navigation';
import {Button} from 'react-native';
import ResultsContainer from './containers/ResultsContainer';
import HomeContainer from './containers/HomeContainer';

export const App = StackNavigator(
  {
    Home: {
      screen: HomeContainer,
    },
    SearchResults: {
      screen: ResultsContainer,
    },
    // Details: {
    //   screen: DetailsContainer
    // }
  },    
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: 'black'
      },
      headerTintColor: 'pink',
      headerTitleStyle: {
        fontWeight: 'bold',
        color: '#fff'
      },
      headerRight: (
        <Button
          onPress={() => alert('This is a button!')}
          title='Info'
          color='#fff'
        />
      )
    }
  }
);
