import React from 'react';
import { View, Text, StyleSheet, Button, Modal, Image } from 'react-native';

import PropTypes from 'prop-types';
import { dustConditions } from '../util/dustConditions';

const Weather = ({stationName,pm10Grade,pm10Value,pm25Value,time}) => {

  const dustCondition = Object.assign({},dustConditions[pm10Grade] )
  return (
    <View>
      <View style={styles.BodyMainBox} >
        <View>
          <Text style={styles.subtitle}>현위치가장 가까운측정소 : {stationName}</Text>
        </View>
      </View>
      <View style={[styles.BodyMainBox, {flexDirection : 'column', alignItems : 'center' }]} >
        <Image
          style={{width:200, height:200} }
          source={dustCondition.img}
        />
        <View style={[styles.BoxStyle, { backgroundColor : dustCondition.color, borderColor : dustCondition.color } ]}>
          <Text style={styles.boxtitle}>{dustCondition.title}</Text>
        </View>
        <View style= {{alignItems : 'center', marginLeft : 5 }}>
          <Text style={styles.title}>{time}</Text>
          <Text style={styles.subtitle}>{dustCondition.subtitle}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  BodyMainBox: {
    flexDirection : 'row',
    justifyContent: 'center',
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: '#ffffff',
    backgroundColor: '#ffffff',
    margin : 10,
    marginTop : 0,
    padding :10
  },
  BoxStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 4,
    borderWidth: 1.5,
    fontSize : 30,
    fontWeight : 'bold',
    width : 150
  },
  title: {
    fontSize: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight : 'bold',
  },
  boxtitle: {
    fontSize: 30,
    color: 'white',
  },
});

export default Weather;
