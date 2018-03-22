import { StackNavigator } from 'react-navigation'

import * as Containers from './app/containers'


export const App = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    SearchResults: {
      screen: SearchResultsScreen,
    },
    Details: {
      screen: DetailsScreen
    }
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
