import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card'
import Button from '../shared/button'
import { PieChart } from 'react-native-svg-charts'
 

export default function Dashboard(){
    const data = [40, 15 , 20,25  ]
 
    const randomColor = ['#0078C4','#F9734B','#F9C44B','green']

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
            <Text style={globalStyles.subTitle}>Welcome to your personalized benefit dashboard, Anna</Text>
            <Text style={globalStyles.headerText} >Dashboard</Text>
            <Card>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={globalStyles.headerText} >Benefits Overview</Text>
                </View>
                <PieChart style={{ height: 200 }} innerRadius={70} padAngle={0} spacing={0} data={pieData} />
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={{color:'#0078C4'}}>40% Health</Text>
                    <Text style={{color:'#F9734B'}}>15% Misc Health</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={{color:'#F9C44B'}}>20% Other</Text>
                    <Text style={{color:'green'}}>25% Retirement</Text>
                </View>
                <Button onPress={()=>{console.log('Benefits Overview Edit button Pressed')}} text="Edit"/>
            </Card>
            <Card>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:10}}>
                    <Text style={globalStyles.headerText} >Contributions Overview</Text>
                </View>

                <View style={{flexDirection:'column',justifyContent:'space-between'}}>
                    <Text >TOTAL BALANCE</Text>
                    <Text style={{marginBottom:10, fontWeight:'bold', fontSize:28}}>$0</Text>
                    <Text >TOTAL PRUDENTIAL ASSETS</Text>
                    <Text style={{marginBottom:10, fontWeight:'bold', fontSize:18}}>$0</Text>
                    <Text >CONNECTED ACCOUNTS BALANCE</Text>
                    <Text style={{marginBottom:10, fontWeight:'bold', fontSize:18}}>$0</Text>
                    <Text >TOTAL YEARLY CONTRIBUTION</Text>
                    <Text style={{marginBottom:10, fontWeight:'bold', fontSize:18}}>$0</Text>
                    <Text>RISK ATTRIBUTE</Text>
                    <Text style={{marginBottom:10, fontWeight:'bold', fontSize:18}}>Moderate</Text>
                </View>
                <Button onPress={()=>{console.log('Contributions Overview Edit button Pressed')}} text="Edit"/>
            </Card>
        </View>
        </ScrollView>
    )
}