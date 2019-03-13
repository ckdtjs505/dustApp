import React from 'react';
import { StyleSheet, Text, View, Animated, ActivityIndicator, Button } from 'react-native';

import { API_KEY } from './util/dustAPIKey';
import { API_AUTH } from './util/sgisAPIKey';
import { API_TRAD } from './util/sgisAPIKey';
import { API_SET } from './util/dustAPIKey';
import { API_GET } from './util/dustAPIKey';

import { CONSUMER_KET } from './util/sgisAPIKey';
import { CONSUMER_SECRET } from './util/sgisAPIKey';

import Weather from './components/Weather';
import ViewDustCondition from './components/viewDustCondition';

import { ScrollView } from 'react-native-gesture-handler';
import { black } from 'ansi-colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const WGS84 = 4326;
const GRS80 = 5181;

export default class App extends React.Component {
  state = {
    isLoading: true,
    stationName: '',  // 가까운 측정소

    pm10Grade : 0, // 미세먼지 등급
    pm10Value : 0, // 미세먼지

    pm25Grade : 0, // 초미세먼지 등급
    pm25Value : 0, // 초미세먼지

    coGrade : 0, // 이산화탄소 등급
    coValue : 0, // 이산화탄소

    no2Grade : 0, // 이산화질소 등급
    no2Value : 0, // 이산화질소

    o3Grade : 0,  // 오존 등급
    o3Value : 0,  // 오존

    so2Grade : 0, // 아황산가스 등급
    so2Value : 0, // 아황산가스

    time : 0,   // 측정시간
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
  }wkdgns
  fetchWeather(dong) {
    const urlC = `${API_GET}?serviceKey=${API_KEY}&numOfRows=10&pageNo=1&stationName=${dong}&dataTerm=DAILY&ver=1.3&_returnType=json`
    console.log(urlC);
    console.log(API_GET);
    fetch(urlC)
      .then(res => res.json())
      .then(data => {
        console.log(data.list[0]);
        this.setState({
          pm10Grade : data.list[0].pm10Grade,
          pm10Value : data.list[0].pm10Value,

          pm25Grade : data.list[0].pm25Grade,
          pm25Value : data.list[0].pm25Value,

          coGrade : data.list[0].coGrade,
          coValue : data.list[0].coValue,

          no2Grade : data.list[0].no2Grade,
          no2Value : data.list[0].no2Value,

          o3Grade : data.list[0].o3Grade,
          o3Value : data.list[0].o3Value,

          so2Grade : data.list[0].so2Grade,
          so2Value : data.list[0].so2Value,
          time : data.list[0].dataTime,
          isLoading: false
        });
      });
  }



  render() {
    const { isLoading } = this.state;
    const onPressTest = () => {
      this.setState({
        isLoading : true
      });
      this.componentDidMount();
    };
    return (
      <View style={styles.container}>
        {isLoading ?
        <View style={[styles.container , {justifyContent: 'center', alignItems : 'center'}]}>
          <ActivityIndicator size="large" color="black" />
          <Text style={styles.Loding}> Loading ... </Text>
        </View>
        :
        <View style={styles.container}>
          <View style={styles.button}>
          <Button
              style={styles.button}
              color = "darkviolet"
              onPress = {onPressTest}
              title = "RELOAD"
            ></Button>
          </View>
          <Weather
            stationName={this.state.stationName}
            pm10Grade={this.state.pm10Grade}
            pm10Value={this.state.pm10Value}
            pm25Value={this.state.pm25Value}
            time={this.state.time}
            >
          </Weather>
          <ViewDustCondition
            pm10Grade={this.state.pm10Grade}
            pm10Value={this.state.pm10Value}
            pm25Grade={this.state.pm25Grade}
            pm25Value={this.state.pm25Value}
            coGrade={this.state.coGrade}
            coValue={this.state.coValue}
            no2Grade={this.state.no2Grade}
            no2Value={this.state.no2Value}
            o3Grade={this.state.o3Grade}
            o3Value={this.state.o3Value}
            so2Grade={this.state.so2Grade}
            so2Value={this.state.so2Value}
          />
        </View>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efefef',
    paddingTop: 15,
    // justifyContent: 'center'
  },
  horizontal: {
    alignItems : 'center',
  },
  Loding: {
    marginTop : 10,
    fontSize: 20,
    fontWeight : 'bold',
    color: 'black',
  },
  button : {
    margin : 10
  }
});
