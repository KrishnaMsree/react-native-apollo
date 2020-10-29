import React from 'react';
import {View, Text, Dimensions, Image, StyleSheet, ScrollView} from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import { PieChart } from 'react-native-svg-charts'
import { MaterialIcons, Ionicons } from '@expo/vector-icons'; 
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
      <ScrollView>
        <View style={globalStyles.viewContainer}>
            <Text style={globalStyles.headerText} >Your Goals</Text>
            
            <Card>
              <MaterialIcons name="add" style={{fontSize:40,marginLeft:'40%',color:'grey'}} onPress={()=>{console.log("Add a goal");}}/>
              <View style={{flexDirection:'column'}}>
                <Text style={{marginLeft:'35%',color:'grey'}}>Add a new</Text>
                <Text style={{marginLeft:'28%',color:'grey'}}>Personal life goal</Text>
              </View>
            </Card>
            
            <View style={styles.card}>
              <View><Image style={globalStyles.image} source={require('../assets/debitcard.jpg')}/></View>
                <Text style={{fontWeight:'bold',fontSize:24,margin:10}}>Pay Off Student Loan</Text>
                <Text style={{fontSize:20,marginLeft:10}}>$5k/$50k</Text>
                <Text style={{marginLeft:10}}>amount saved for goal</Text>
                <View style={{flexDirection:'row',paddingTop:10,marginRight:10,marginBottom:10}}>
                  <View style={{marginLeft:10,marginRight:35}}> 
                    <Text style={{fontSize:20}}>$300</Text>
                    <Text >monthly</Text>
                  </View>
                  <PieChart style={{ height: 70}} startAngle={25} innerRadius={15}  padAngle={0} spacing={0} data={pieData} />
                </View>
            </View>

            <View style={styles.card}>
              <View ><Image style={globalStyles.image} source={require('../assets/safety.jpg')}/></View>
                <Text style={{fontWeight:'bold',fontSize:24,margin:10}}>Save for retirement</Text>
                <Text style={{fontSize:20,marginLeft:10}}>$132k/$900k</Text>
                <Text style={{marginBottom:10,marginLeft:10}}>amount saved for goal</Text>
                <View style={{flexDirection:'row',marginRight:10, marginBottom:10}}>
                  <View style={{marginLeft:10,marginRight:35}}> 
                    <Text style={{fontSize:20}}>$3.2k</Text>
                    <Text >monthly</Text>
                  </View>
                  <PieChart style={{ height: 70}} startAngle={25} innerRadius={15}  padAngle={0} spacing={0} data={pieData} />
                </View>
            </View>


            <View style={{margin:10}}>
              <Text style={{fontSize:18,marginBottom:10}}>We recommend:</Text>
              <View style={{flexDirection:'row'}} >
                <Ionicons name="ios-arrow-dropright-circle" size={24} color="blue" />
                <Text style={{color:'blue',fontSize:14}}>  Continue saving when you can</Text>
              </View>
              <Text style={{marginBottom:10,marginTop:10,fontSize:14}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.
              </Text>
              
              <View style={{flexDirection:'row'}} >
                <Ionicons name="ios-arrow-dropup-circle" size={24} color="green" />
                <Text style={{color:'green',fontSize:14}}>  Increase monthly contributions to your 401(k)</Text>
              </View>
              <Text style={{marginBottom:10,marginTop:10,fontSize:14}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.
              </Text>

              <View style={{flexDirection:'row'}} >
                <Ionicons name="ios-arrow-dropdown-circle" size={24} color="red" />
                <Text style={{color:'red',fontSize:14}}>  Decrease contributions to your IRA for now</Text>
              </View>
              <Text style={{marginBottom:10,marginTop:10,fontSize:14}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.
              </Text>
            </View>
          </View>
        </ScrollView>
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
    marginBottom:20,
  },
  cardContent: {
    lineHeight:5,
    // backgroundColor: 'red',
    padding: 10
  }
})