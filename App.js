import React from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';

import { API_KEY } from './util/dustAPIKey';

import Weather from './components/Weather';

export default class App extends React.Component {
  state = {
    isLoading: false,
    temperature: 0,
    weatherCondition: null,
    error: null
  };

  componentDidMount() {

    navigator.geolocation.getCurrentPosition(
      position => {
        this.fetchWeather(position.coords.latitude, position.coords.longitude);
      },
      error => {
        this.setState({
          error: 'Error Gettig Weather Condtions'
        });
      }
    );
  }


  fetchWeather(lat = 25, lon = 25) {
    console.log(API_KEY);
    fetch(
      `http://openapi.airkorea.or.kr/openapi/services/rest/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?serviceKey=${API_KEY}&numOfRows=50&pageNo=1&sidoName=%EA%B2%BD%EA%B8%B0&ver=1.3&_returnType=json`
    )
      .then(res => res.json())
      .then(json => {
        console.log(json);
      });
  }

  render() {
    const { isLoading } = this.state;
    return (
      <View style={styles.container}>
        {isLoading ? <Text>Fetching The Weather</Text> : <Weather />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
