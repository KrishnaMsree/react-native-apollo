import React from 'react';
import {View, Text, ScrollView, Dimensions} from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card'
import Button from '../shared/button'
import { PieChart, StackedAreaChart, YAxis, Grid } from 'react-native-svg-charts'
import { LineChart } from 'react-native-line-chart'

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
    
      const datas = [{
          labels: [ 'Age 25', '', 'Today', 'Age 32' ],
            datasets: [
                {
                    fill: true,
                    label: '1',
                    lineTension: 0,
                    backgroundColor: 'green',
                    data: [ 0, 25 ],
                    pointRadius: 0
                },
                {
                    label: '2',
                    fill: true,
                    lineTension: 0,
                    backgroundColor: 'green',
                    borderWidth: 0,
                    data: [0,25, 50, 75 ],
                    pointRadius: 0
                }
            ]
        }
      ]
      

    const colors = [ '#3bc456', 'yellow']
    const keys   = [ 'salary','age' ]
    return (
        <ScrollView>
        <View style={globalStyles.viewContainer}>
            <Text style={globalStyles.subTitle}>Your goals</Text>
            <Text style={globalStyles.headerText} >Pay off student loan</Text>
            <Card>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={globalStyles.headerText} >Goal progress</Text>
                </View>
                  <PieChart style={{ height: 200}} startAngle={25} innerRadius={70}  padAngle={0} spacing={0} data={pieData} />
                {/*
                subTitle={{
                        text: "Doughnut Chart",
                        verticalAlign: "center",
                        dockInsidePlotArea: true
                  }} <PieChart style={{ height: 200 }} innerRadius={70} padAngle={0} spacing={0} data={pieData} /> */}
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={{color:'blue'}}>$5k/$50k</Text>
                    <Text style={{color:'black'}}>$300</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={{color:'black'}}>amount saved for goal</Text>
                    <Text style={{color:'black'}}>monthly</Text>
                </View>
            </Card>

            <Card>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={globalStyles.headerText} >Goal Trajectory</Text>
                </View>
                <View style={ { flexDirection: 'row', height: 200 } }>
                    <StackedAreaChart
                        style={ { flex: 1 } }
                        contentInset={ { top: 10, bottom: 10 } }
                        data={ datas }
                        keys={ keys }
                        colors={ colors }
                        
                    >
                        {/* <Grid/> */}
                    </StackedAreaChart>
                    <YAxis
                        style={ { position: 'absolute', top: 0, bottom: 0 }}
                        data={ StackedAreaChart.extractDataPoints(datas, keys) }
                        contentInset={ { top: 10, bottom: 10 } }
                        svg={ {
                            fontSize: 8,
                            fill: 'black',
                            stroke: 'black',
                            strokeWidth: 0.1,
                            alignmentBaseline: 'baseline',
                            baselineShift: '3',
                        } }
                    />
                </View>
            </Card>
            
        </View>
        </ScrollView>
    )
}


// <View>
//                 <Text>Bezier Line Chart</Text>
//                 <LineChart
                     
//                     data={{
//                         labels: [ 'Age 25', '', 'Today', 'Age 32' ],
//                         datasets: [
//                             {
//                                 fill: true,
//                                 label: '1',
//                                 lineTension: 0,
//                                 backgroundColor: 'green',
//                                 data: [ 0, 0, 20, 0 ],
//                                 pointRadius: 0
//                             },
//                             {
//                                 label: '2',
//                                 fill: true,
//                                 lineTension: 0,
//                                 backgroundColor: 'green',
//                                 borderWidth: 0,
//                                 data: [0,25, 50, 75 ],
//                                 pointRadius: 0
//                             }
//                         ]
//                     }}
//                     options={{
//                         legend: {
//                             display: false
//                         },

//                         scales: {
//                             yAxes: [
//                                 {
//                                     position: 'right',
//                                     ticks: {
//                                         beginAtZero: true,
//                                         min: 0,
//                                         max: 75,
//                                         stepSize: 15
//                                     }
//                                 }
//                             ]
//                         }
//                     }}
//                     width={300} // from react-native
//                     height={220}
//                     chartConfig={{
//                     backgroundColor: "green",
//                     backgroundGradientFrom: "white",
//                     backgroundGradientTo: "white",
//                     color: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
//                     labelColor: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
//                     style: {
//                         borderRadius: 16
//                     },
//                     propsForDots: {
//                         r: "6",
//                         strokeWidth: "2",
//                         stroke: "#ffa726"
//                     }
//                     }}
                    
//                     style={{
//                     marginVertical: 8,
//                     borderRadius: 16
//                     }}
//                 />
//                 </View>