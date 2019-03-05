import React from 'react';
import { View, Text, StyleSheet, Button, Modal, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { dustConditions } from '../util/dustConditions';

const Weather = ({dustStateV,stationName,no2Value,o3Value,pm10Value,pm25Value,so2Value, time}) => {

  const dustCondition = Object.assign({},dustConditions[dustStateV] )
  const onPressTest = () => {alert('hh')};
  return (
    <View
      style={[styles.weatherContainer,
        { backgroundColor : dustCondition.color }
        ]}
      >
      <View style={styles.headerContainer}>
        <MaterialCommunityIcons size={75} name={dustCondition.icon} color={'#fff'} />
        <Text style={styles.subtitle}>{time} </Text>
        <Text style={styles.subtitle}>현위치가장 가까운측정소</Text>
        <Text style={styles.tempText}>{stationName}</Text>
        <Text style={styles.title}> {dustCondition.title} </Text>
      </View>
      <View style={styles.headerContainer}>
        <Image source= {dustCondition.img} style={styles.img} />
      </View>
 
      <View style={styles.bodyContainer} >
        
        <Text style={styles.subtitle}>미세먼지 : {pm10Value}</Text>
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
    marginTop : 100
  },
  tempText: {
    fontSize: 48,
    color: '#fff'
  },
  bodyContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 25,
    marginBottom: 50
  },
  img : {
    width : 200,
    height : 200,
  },
  title: {
    fontSize: 40,
    fontWeight : 'bold',
    color: 'black'
  },
  subtitle: {
    fontSize: 24,
    color: '#fff'
  }
});

export default Weather;
