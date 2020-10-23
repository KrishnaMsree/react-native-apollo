import React from 'react';
import {View, Text, Dimensions, Image, StyleSheet, ScrollView} from 'react-native';
import { globalStyles } from '../styles/global';

import { PieChart, ProgressCircle } from 'react-native-svg-charts'

export default function Goals(){
  const data = [85,18  ]
 
  const randomColor = ['lightgrey','#030078']

  const pieData = data
      .filter((value) => value > 0)
      .map((value, index) => ({
          value,
          svg: {
              fill: randomColor[index],
              onPress: () => console.log('press', index),
          },
          key: `pie-${index}`,
      }))
    return (
        <View style={globalStyles.viewContainer}>
        {/* <ScrollView> */}
          <Text style={globalStyles.headerText} >Your Goals</Text>
          <View style={styles.card}>
                {/* <PieChart style={{ height: 120 }} startAngle={25} innerRadius={35} outerRadius={55} padAngle={0} spacing={0} data={pieData} /> */}
            <Image style={globalStyles.image} source={require('../assets/debitcard.jpg')}/>
            {/* <View style={styles.cardContent}> */}
              <Text style={{fontWeight:'bold',fontSize:27,margin:10}}>Pay Off Student Loan</Text>
              <View style={{flexDirection:'row',justifyContent:'space-between',marginRight:10}}>
                <View style={{margin:10}}> 
                  <Text style={{fontSize:20}}>$5k/$50k</Text>
                  <Text style={{marginBottom:10}}>amount saved for goal</Text>
                  <Text style={{fontSize:20}}>$300</Text>
                  <Text >monthly</Text>
                </View>
                <PieChart style={{ height: 70,alignSelf:'flex-start' ,justifyContent:'space-evenly' }} startAngle={25} innerRadius={15}  padAngle={0} spacing={0} data={pieData} />
              </View>
            {/* </View> */}
          </View>
          {/* </ScrollView> */}
        </View>
    )
}
const styles= StyleSheet.create({
  card: {
    borderRadius: 6,
    elevation: 5,
    backgroundColor: '#fff',
    shadowOffset: { width: 5, height: 5 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 10,
  },
  cardContent: {
    lineHeight:5,
    // backgroundColor: 'red',
    padding: 10
  }
})