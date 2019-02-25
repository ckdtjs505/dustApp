import React from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';

import { API_KEY } from './util/dustAPIKey';
import { API_AUTH } from './util/sgisAPIKey';
import { API_TRAD } from './util/sgisAPIKey';
import { API_SET } from './util/dustAPIKey';
import { API_GET } from './util/dustAPIKey';

import { CONSUMER_KET } from './util/sgisAPIKey';
import { CONSUMER_SECRET } from './util/sgisAPIKey';

import Weather from './components/Weather';

const WGS84 = 4326;
const GRS80 = 5181;

export default class App extends React.Component {
  state = {
    isLoading: true,
    stationName: '',
    no2Value : 0,
    o3Value : 0,
    pm10Value : 0,
    pm25Value : 0,
    so2Value : 0,
    dustStateV : '',
    dong : null,
    error: null
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.fetchAuth(position.coords.latitude, position.coords.longitude);
      },
      error => {
        this.setState({
          error: 'Error Gettig Weather Condtions'
        });
      }
    );
  }

  fetchAuth(latitude, longitude){
    const url = `${API_AUTH}?consumer_key=${CONSUMER_KET}&consumer_secret=${CONSUMER_SECRET}`;
    fetch(url)
    .then(res=> res.json())
    .then(data => {
      // console.log(data);
      this.fetchCrdTms(data.result.accessToken, latitude,longitude);
    })
  }

  fetchCrdTms(accessToken, latitude, longitude){
    const urlT = `${API_TRAD}?accessToken=${accessToken}&src=${WGS84}&dst=${GRS80}&posX=${longitude}&posY=${latitude}`;
    // console.log(urlT);
    fetch(urlT)
    .then(res => res.json())
    .then(data => {
      this.fetchGetSan(data.result.posX,data.result.posY );
    })
  }

  fetchGetSan(tmX, tmY){
    const urlS = `${API_SET}?serviceKey=${API_KEY}&tmX=${tmX}&tmY=${tmY}&_returnType=json`;
    console.log(urlS);
    fetch(urlS)
    .then(res => res.json())
    .then(data => {
      this.fetchWeather(data.list[0].stationName);
      this.setState({
        stationName : data.list[0].stationName
      });
    })
  }
  fetchWeather(dong) {
    const urlC = `${API_GET}?serviceKey=${API_KEY}&numOfRows=10&pageNo=1&stationName=${dong}&dataTerm=DAILY&ver=1.3&_returnType=json`
    console.log(urlC);
    console.log(API_GET);
    fetch(urlC)
      .then(res => res.json())
      .then(data => {
        console.log(data.list[0]);
        this.setState({
          no2Value : data.list[0].no2Value,
          o3Value : data.list[0].o3Value,
          pm10Value : data.list[0].pm10Value,
          pm25Value : data.list[0].pm25Value,
          so2Value : data.list[0].so2Value,
          isLoading: false
        });
        this.bis(data.list[0].pm25Value, data.list[0].pm10Value);
      });
  }

  bis(pm25, pm10){
    var dustState='';
    if (pm25 <= 15 ) {
      dustState = 'good';
    } else if(pm25 > 15 && pm25 <= 35){
      dustState = 'soso'
    } else if (pm25 > 35 && pm25 <=75) {
      dustState = 'bad'
    } else if (pm25 > 75) {
      dustState = 'veryBad'
    } else {
      dustState = 'veryBad'
    }

    this.setState({
      dustStateV : dustState
    })
  }


  render() {
    const { isLoading } = this.state;
    return (
      <View style={styles.container}>
        {isLoading ? <Text>Fetching The Weather</Text> :
          <Weather
            stationName={this.state.stationName}
            no2Value={this.state.no2Value}
            o3Value={this.state.o3Value}
            pm10Value={this.state.pm10Value}
            pm25Value={this.state.pm25Value}
            so2Value={this.state.so2Value}
            dustStateV={this.state.dustStateV}
          />}
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
