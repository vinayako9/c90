import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Alert,
  FlatList,
  Image,
  ImageBackground,
  Dimensions,
} from 'react-native';
import axios from 'axios';
import { object } from 'prop-types';

export default class MeteorScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meteors: {},
    };
  }

  componentDidMount() {
    this.getMeteors();
  }

  getMeteors=async()=>{
    axios
    .get(
      https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=Go8dHCy4Y1gMgM0U1YoyrEo3J82JFQ5oa0yeHsDd
    )
    .then((response) => {
      this.setState({meteors: response.data.near_earth_objects});
      console.log(object.keys(this.state.meteors));
    })
    .catch((error) => {
      alert(error.message);
    });
  } ;
  
    
      

  render() {
    
    return (
        <View style={styles.container}>
        <SafeAreaView style={styles.androidSafeArea}/>
        <Text> Meteors Screen</Text>
        </View>
      );
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  androidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  
  
});
