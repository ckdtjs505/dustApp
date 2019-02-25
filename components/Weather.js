import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { dustConditions } from '../util/dustConditions';

const Weather = ({dustStateV,stationName,no2Value,o3Value,pm10Value,pm25Value,so2Value}) => {

  const dustCondition = dustConditions[dustStateV];
  console.log(dustCondition)
  return (
    <View
      style={[styles.weatherContainer,
        { backgroundColor : dustCondition.color }
        ]}
      >
      <View style={styles.headerContainer}>
        <MaterialCommunityIcons size={48} name="weather-sunny" color={'#fff'} />
        <Text style={styles.subtitle}>가장가까운측정소</Text>
        <Text style={styles.tempText}>{stationName}</Text>
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.title}></Text>
        <Text style={styles.subtitle}>미세먼지 : {pm10Value} : {dustStateV}</Text>
        <Text style={styles.subtitle}>초미세먼지 : {pm25Value}</Text>
      </View>
    </View>
  );
};
Weather.propTypes = {
  dustStateV : PropTypes.string
}

const styles = StyleSheet.create({
  weatherContainer: {
    flex: 1,
    backgroundColor: '#f7b733'
  },
  headerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop : 30
  },
  tempText: {
    fontSize: 48,
    color: '#fff'
  },
  bodyContainer: {
    flex: 2,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 25,
    marginBottom: 40
  },
  title: {
    fontSize: 48,
    color: '#fff'
  },
  subtitle: {
    fontSize: 24,
    color: '#fff'
  }
});

export default Weather;
