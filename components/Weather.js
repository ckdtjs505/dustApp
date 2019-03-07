import React from 'react';
import { View, Text, StyleSheet, Button, Modal, Image } from 'react-native';

import PropTypes from 'prop-types';
import { dustConditions } from '../util/dustConditions';

const Weather = ({dustStateV,stationName,no2Value,o3Value,pm10Value,pm25Value,so2Value,coValue,time}) => {

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
        <View style={[styles.BoxStyle, { backgroundColor : dustCondition.color, borderColor : dustCondition.color } ]}>
          <Text style={styles.boxtitle}>{dustCondition.title}</Text>
        </View>
        <View>
          <Text style={styles.subtitle}>{time}</Text>
          <Text style={styles.subtitle}>{dustCondition.subtitle}</Text>
        </View>
      </View>

      <View style={[styles.BodyMainBox,
         {marginTop : 0, flexDirection : "column", alignItems : 'center'}
         ]} >
        <View style = { {flexDirection : 'row'} }>
          <View style={ [styles.subBox,
            {  alignItems : 'center'  }]} >
            <Text >미세먼지</Text>
            <Text >{pm10Value}</Text>
          </View>

          <View style={ [styles.subBox,
            {  alignItems : 'center'  }]} >
            <Text >초미세먼지</Text>
            <Text >{pm25Value}</Text>
          </View>

          <View style={ [styles.subBox,
            {  alignItems : 'center'  }]} >
            <Text >오존</Text>
            <Text >{o3Value}</Text>
          </View>
        </View>
        <View style = { {flexDirection : 'row'} }>
          <View style={ [styles.subBox,
            {  alignItems : 'center'  }]} >
            <Text >이산화질소</Text>
            <Text >{no2Value}</Text>
          </View>

          <View style={ [styles.subBox,
            {  alignItems : 'center'  }]} >
            <Text >아황산가스</Text>
            <Text >{so2Value}</Text>
          </View>

          <View style={ [styles.subBox,
            {  alignItems : 'center'  }]} >
            <Text >이산화탄소</Text>
            <Text >{coValue}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

Weather.propTypes = {
  dustStateV : PropTypes.string
}

const styles = StyleSheet.create({
  subBox : {
    fontSize : 20,
    width : 100,
    borderWidth: 1.5,
    borderColor: 'white',
  },
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
  BoxStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 4,
    borderWidth: 1.5,
    fontSize : 30,
    fontWeight : 'bold',
    width : 100
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
  },
  boxtitle: {
    fontSize: 30,
    color: 'white',
  },
});

export default Weather;
