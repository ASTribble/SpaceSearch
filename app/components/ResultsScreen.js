
import React from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  ActivityIndicator,
  Image,
  ScrollView
} from 'react-native';


export class ResultsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.renderItem = this.renderItem.bind(this);
  }

  static navigationOptions = {
    title: 'SearchResults'
  }

  render(){
    if (this.props.loading) {
      return (
        <View style={StyleSheet.activityIndicatorContainer}>
          <ActivityIndicator animating={true} />
        </View>
      );
    } else {
      return (
        <ScrollView style={{ flex: 1, backgroundColor: '#F5F5F5', paddingTop: 20 }}>
          <FlatList
            ref='searchRef'
            data={this.props.searchResults}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index}
          />
        </ScrollView>
      );
    }
  }
  renderItem({ item, index }) {
    return (
      <View style={styles.row}>
        <Text style={styles.title}>
          {(parseInt(index) + 1)}{". "}{item.title}
        </Text>
        <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
      </View>
    );
  }
};

const styles = StyleSheet.create({

  activityIndicatorContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },

  row: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    padding: 10
  },

  title: {
    fontSize: 15,
    fontWeight: '600'
  },

  thumbnail: { 
    height: 200, 
    width: 200 
  }

});