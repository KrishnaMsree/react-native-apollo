import React from 'react';
import {View, Text, ScrollView, Dimensions} from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card'
import Button from '../shared/button'
import { PieChart, StackedAreaChart, YAxis, Grid } from 'react-native-svg-charts'
import { LineChart } from 'react-native-line-chart'
import { MaterialIcons, Ionicons } from '@expo/vector-icons'; 

export default function Dashboard(){
  const data = [85,15  ]
 
  const randomColor = ['lightgrey','green']

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
            <Text style={globalStyles.subTitle}>Your goals</Text>
            <Text style={globalStyles.headerText} >Pay off student loan</Text>
            
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={globalStyles.headerText} >Goal progress</Text>
            </View>

            <Card>
                <PieChart style={{ height: 200}} startAngle={25} innerRadius={70}  padAngle={0} spacing={0} data={pieData} />
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={{color:'blue'}}>$5k/$50k</Text>
                    <Text style={{color:'black'}}>$300</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={{color:'black'}}>amount saved for goal</Text>
                    <Text style={{color:'black'}}>monthly</Text>
                </View>
            </Card>

            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={globalStyles.headerText} >Goal Trajectory</Text>
            </View>

            <Card>
                 <View>
                     <LineChart
                     
                    data={{
                        labels: [ 'Age 25', '', 'Today', 'Age 32' ],
                        datasets: [
                            {
                                label: '2',
                                fill: true,
                                lineTension: 0,
                                backgroundColor: 'black',
                                borderWidth: 0,
                                data: [0,25, 50, 75 ],
                                pointRadius: 0
                            }
                        ]
                    }}
                    
                    width={300} // from react-native
                    height={220}
                    chartConfig={{
                    backgroundColor: "green",
                    backgroundGradientFrom: "white",
                    backgroundGradientTo: "white",
                    fillShadowGradient:'green',
                    color: (opacity = 1) => 'green',
                    labelColor: (opacity = 1) => 'green',
                    fillShadowGradient:'green',
                    style: {
                        borderRadius: 16
                    },
                    propsForDots: {
                        r: "6",
                        strokeWidth: "2",
                        stroke: "white"
                    }
                    }}
                    
                    style={{
                    marginVertical: 8,
                    borderRadius: 16
                    }}
                />
                </View>
                <View style={{ flexDirection:'column'}}>
                    <View>
                        <Button  text="Well Funded  " onPress={()=>console.log("Well Funded button pressed")}/>
                    </View>
                    <View>
                        <Text style={{lineHeight:20,marginTop:10, marginLeft:5}}>
                            Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt
                             ut labore et dolore magna
                            aliqua.
                        </Text>
                    </View>
                </View>
            </Card>

            

            <View style={{margin:10}}>
                <Text style={{fontSize:18,marginBottom:10}}>We recommend:</Text>
                <Card>
                    <View style={{flexDirection:'row'}} >
                        <Ionicons name="ios-arrow-dropright-circle" size={24} color="blue" />
                        <Text style={{color:'blue',fontSize:14}}>  Continue saving when you can</Text>
                    </View>
                    <Text style={{marginBottom:10,marginTop:10,fontSize:14}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua.
                    </Text>
                </Card>
                
                <Card>
                    <View style={{flexDirection:'row'}} >
                        <Ionicons name="ios-arrow-dropdown-circle" size={24} color="red" />
                        <Text style={{color:'red',fontSize:14}}>  Decrease contributions to your IRA for now</Text>
                    </View>
                    <Text style={{marginBottom:10,marginTop:10,fontSize:14}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua.
                    </Text>
                </Card>
            </View>
            
        </View>
        </ScrollView>
    )
}

{/*
                subTitle={{
                        text: "Doughnut Chart",
                        verticalAlign: "center",
                        dockInsidePlotArea: true
                  }} <PieChart style={{ height: 200 }} innerRadius={70} padAngle={0} spacing={0} data={pieData} /> */}