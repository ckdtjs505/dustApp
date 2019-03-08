import React from 'react';
import { View, Text, StyleSheet, Button, Modal, Image } from 'react-native';


import PropTypes from 'prop-types';
import { dustConditions } from '../util/dustConditions';

const Weather = ({dustStateV,stationName,no2Value,o3Value,pm10Value,pm25Value,so2Value, time}) => {

  const dustCondition = Object.assign({},dustConditions[dustStateV] )
  const onPressTest = () => {alert('hh')};
  return (
    <View>
      <View style={[styles.BodyMainBox,
         {marginTop : 0}]} >
        <View>
          <Text style={styles.subtitle}>현위치가장 가까운측정소 : {stationName}</Text>
        </View>
      </View>
      <View style={[styles.BodyMainBox,
         {marginTop : 0}]} >
        <Text style={[styles.headBox,
        { backgroundColor : dustCondition.color }]
        }>{dustCondition.title}</Text>
        <View>
          <Text style={styles.subtitle}>{time}</Text>
          <Text style={styles.subtitle}>{dustCondition.subtitle}</Text>
        </View>
      </View>

      <View style={[styles.BodyMainBox,
         {marginTop : 0}
         ]} >
        <View>
          <Text style={styles.subtitle}>미세먼지 : {pm10Value}</Text>
          <Text style={styles.subtitle}>초미세먼지 : {pm25Value}</Text>
          <Text style={styles.subtitle}>오존 : {o3Value}</Text>
          <Text style={styles.subtitle}>이산화질소 : {no2Value}</Text>
          <Text style={styles.subtitle}>아황산가스 : {so2Value}</Text>
        </View>
      </View>


      <View style={[styles.BodyMainBox,
         {marginTop : 0}
         ]} >
        <View>
          <Text style={styles.subtitle}>미세먼지 : | 0 ~ 30 | 31 ~80 | 81 ~ 150 | 150~ </Text>
          <Text style={styles.subtitle}>초미세먼지 :  | 0 ~ 15 | 16 ~35 | 36 ~ 75 | 67~ </Text>
        </View>
      </View>


    </View>
  );
};

Weather.propTypes = {
  dustStateV : PropTypes.string
}

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop : 150
  },
  bodyContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 25,
    marginBottom: 50
  },

  BodyMainBox: {
    flexDirection : 'row',
    justifyContent: 'center',
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: '#ffffff',
    backgroundColor: '#ffffff',
    margin : 10,
    padding :10
  },
  headBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems : 'center',
    padding :10,
    color : 'white',
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: 'red',
    backgroundColor: 'red',
    fontSize : 30,
    fontWeight : 'bold'
  },


  title: {
    fontSize: 40,
    fontWeight : 'bold',
    color: 'black'
  },
  subtitle: {
    fontSize: 20,
    color: 'black',
    paddingLeft : 10
  }
});

export default Weather;
