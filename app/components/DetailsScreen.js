import React from 'react';
import { withNavigation } from 'react-navigation';

import {
  ScrollView,
  View,
  Text,
  Image,
} from 'react-native';


export default class DetailsScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    return ({
      title: 'Details',
      otherParams: 'Finding Perspective'
    });
  }

  render() {
    
    const item = this.props.detailedItem;
    
    return (
      <ScrollView>
        <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }}>
          <Image
            source={{ uri: item.thumbnail}}
            style={{ height: 500, width: 400 }}
          />
          <Text>Title:{item.title}</Text>
          <Text>nasa_id:{item.nasa_id}</Text>
          <Text>Description: {item.description}</Text>
        </View>
      </ScrollView>
    );
  }
}