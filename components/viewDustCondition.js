import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import { dustConditions } from '../util/dustConditions';

const viewDustCondition = ({
  pm10Grade, pm10Value,
  pm25Grade, pm25Value,
  coGrade, coValue,
  no2Grade, no2Value,
  o3Grade, o3Value,
  so2Grade, so2Value
  }) => {

  const pm10Condition = Object.assign({},dustConditions[pm10Grade] );
  const pm25Condition = Object.assign({},dustConditions[pm25Grade] );
  const coCondition = Object.assign({},dustConditions[coGrade] );
  const no2Condition = Object.assign({},dustConditions[no2Grade] );
  const o3Condition = Object.assign({},dustConditions[o3Grade] );
  const so2Condition = Object.assign({},dustConditions[so2Grade] );

  return (
    <View style={[styles.BodyMainBox,
       {marginTop : 0, flexDirection : "column", alignItems : 'center'}
       ]} >
      <View style = { {flexDirection : 'row'} }>
        <View style={ styles.subBox} >
          <Text style = {styles.title} >미세먼지 </Text>
          <Text style = { [styles.subtitle,  {color : pm10Condition.color} ]}>{pm10Value}㎍/㎥</Text>
        </View>

        <View style = {styles.subBox} >
          <Text style = {styles.title}>초미세먼지</Text>
          <Text style = { [styles.subtitle,  {color : pm25Condition.color} ]}>{pm25Value}㎍/㎥</Text>
        </View>

        <View style = {styles.subBox} >
          <Text style = {styles.title}>오존</Text>
          <Text style = { [styles.subtitle,  {color : o3Condition.color} ]}>{o3Value}ppm</Text>
        </View>
      </View>

      <View style = { {flexDirection : 'row'} }>
        <View style={ styles.subBox }>
          <Text style = {styles.title}>이산화질소</Text>
          <Text style = { [styles.subtitle,  {color : no2Condition.color} ]}>{no2Value}ppm</Text>
        </View>

        <View style={ styles.subBox} >
          <Text style = {styles.title}>아황산가스</Text>
          <Text style = { [styles.subtitle,  {color : so2Condition.color} ]}>{so2Value}ppm</Text>
        </View>

        <View style={ styles.subBox} >
          <Text style = {styles.title}>이산화탄소</Text>
        <Text style = { [styles.subtitle,  {color : coCondition.color} ]}>{coValue}ppm</Text>
        </View>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  subBox : {
    alignItems : 'center',
    fontSize : 20,
    width : 100,
    borderWidth: 1.5,
    borderColor: 'white',
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
  title: {
    fontSize: 20,
    fontWeight : 'bold',
  },
  subtitle: {
    fontSize: 15,
  }
});


export default viewDustCondition;
