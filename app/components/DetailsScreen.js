import React from 'react';
import { withNavigation } from 'react-navigation';

import {
  ScrollView,
  View,
  Text,
  Image,
  Button
} from 'react-native';


export default class DetailsScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    const button =
      <Button
        onPress={() => params.navigation('Home')}
        title='Home'
        color='#fff'
      />
    return {
      title: 'Details',
      headerRight: params ? button : ''
    }
  };

  render() {
    
    const item = this.props.detailedItem;
    
    return (
      <ScrollView>
        <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          <Image
            source={{ uri: item.thumbnail}}
            style={{ height: 600, width: 420 }}
          />
          <Text style={{margin: 10, fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>{item.title.toUpperCase()}</Text>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>nasa id: {item.nasa_id}</Text>
          <Text style={{margin: 10, fontSize: 18}}>{item.description}</Text>
        </View>
      </ScrollView>
    );
  }
}