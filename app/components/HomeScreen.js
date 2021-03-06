import React from 'react';
import {connect, dispatch} from 'react-redux';
import {withNavigation} from 'react-navigation';
import { bindActionCreators} from 'redux';
import {
  Button,
  View,
  Text,
  Image,
  TextInput
} from 'react-native';


export default class HomeScreen extends React.Component {

  static navigationOptions = ({
    title: 'Space Search'
  })

  render() {
    return (

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Sometimes, we just need a little perspective...</Text>
        <Image
          source={{ uri: "https://images-assets.nasa.gov/image/PIA00342/PIA00342~small.jpg" }}
          style={{ height: 450, width: 350 }}
        />
        <TextInput
          style={{ height: 40, width: 300, borderColor: 'gray', borderWidth: 1, marginTop: 10 }}
          onChangeText={(text) => this.props.setSearchTerm(text)}
          value={this.props.searchTerm}
        />
        <Button
          title='Find It'
          onPress={() => {
            this.props.fetchSpaceImages(this.props.searchTerm);
            this.props.navigation.navigate('SearchResults', {
              searchTitle: this._makeSearchTitleParam(),
              navigation: this.props.navigation.navigate
            })
          }}
        />
      </View>
    );
  }

  _makeSearchTitleParam () {
    const searchTitle = this.props.searchTerm.toLowerCase().trim();
    return searchTitle.charAt(0).toUpperCase().concat(searchTitle.slice(1));
  }
}