import React from 'react';
import { StackNavigator } from 'react-navigation';
import {Button} from 'react-native';

import ResultsContainer from './containers/ResultsContainer';
import HomeContainer from './containers/HomeContainer';
import DetailsContainer from './containers/DetailsContainer';

export const App = StackNavigator(
  {
    Home: {
      screen: HomeContainer,
    },
    SearchResults: {
      screen: ResultsContainer,
    },
    Details: {
      screen: DetailsContainer
    }
  },    
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: 'black'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff'
      }
    }
  }
);

