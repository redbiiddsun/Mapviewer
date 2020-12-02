/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

//Component import
import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
} from 'react-native';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

//library import
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
//import { Styles } from '.\component';

const {width, height} = Dimensions.get('window')

const SCREEN_HIGH = height
const SCREEN_WIDTH = width
const ASPECT_RATION = width / height
const LATITUDE_DELTA = 0.922
const LONGTITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATION 
class App extends Component {
  render() {
    return (
      <View style={styles.container}>
       <MapView
         provider={PROVIDER_GOOGLE} // remove if not using Google Maps
         //customMapStyle= {MapStyle}
         style={styles.map}
         region={{
           latitude: 37.78825,
           longitude: -122.4324,
           latitudeDelta: 0.015,
           longitudeDelta: 0.0121,
         }}
       >
       </MapView>
     </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});



export default App;
