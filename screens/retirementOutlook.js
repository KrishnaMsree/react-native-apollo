import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card'
import { StackedAreaChart, YAxis, Grid } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import Button from '../shared/button'

export default function RetirementOutLook(){
    
    const datas = [
        {'name':'TOTAL PRUDENTIAL ASSETS','val':'$102,500', 'key':1},
        {'name':'CONNECTED ACCOUNTS BALANCE','val':'$102,500','key':2},
        {'name':'TOTAL YEARLY CONTRIBUTION','val':'$28,000','key':3},
        {'name':'RISK ATTRIBUTE','val':'Moderate', 'key':4},
    ]
    const data = [
        
        {
            month: new Date(2022, 9, 23),
            age: 25,
            salary: 14,
        },
        {
            month: new Date(2032, 9, 23),
            age: 35,
            salary: 25,

        },
        {
            month: new Date(2034, 9, 23),
            age: 37,
            salary: 20,

        },
        {
            month: new Date(2040, 9, 23),
            age: 43,
            salary: 28,
        },
        {
            month: new Date(2045, 9, 23),
            age: 48,
            salary: 30,
        },
        {
            month: new Date(2070, 9, 23),
            age: 73,
            salary: 40,
        },
        
        {
            month: new Date(2082, 9, 23),
            age: 85,
            salary: 50,
        },
    ]

    const colors = [ '#3bc456', 'transparent']
    const keys   = [ 'salary','age' ]
    return (
        <ScrollView>
        <View style={globalStyles.viewContainer}>
            <Text style={globalStyles.headerText} >Your Total Balance is $102,500.</Text>
            <Card>
            {
                datas.map(d => {
                    return (
                        <View key={d.key}>
                            <Text>{d.name}</Text>
                            <Text style={{fontWeight:'bold',marginBottom:15}}>{d.val}</Text>
                        </View>
                    )
                })
            }
            </Card>
            <Text style={globalStyles.headerText} >Your Retirement Outlook</Text>
            {/* <Text>This is Benefits Preview Page</Text> */}
            <Card>
            <View style={ { flexDirection: 'row-reverse', height: 200 } }>
                <StackedAreaChart
                    style={ { flex: 1 } }
                    contentInset={ { top: 10, bottom: 10 } }
                    data={ data }
                    keys={ keys }
                    colors={ colors }
                    
                >
                    {/* <Grid/> */}
                </StackedAreaChart>
                <YAxis
                    style={ { position: 'absolute', top: 0, bottom: 0 }}
                    data={ StackedAreaChart.extractDataPoints(data, keys) }
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
            <View style={{marginTop:10}}>
                <Button  text="Add Text  " onPress={()=>console.log("Add text button pressed")}/>
                <Text style={{lineHeight:20,marginTop:10}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut venenatis tellus in metus vulputate eu scelerisque 
                    felis. Quis lectus nulla at volutpat diam ut venenatis. 
                    Turpis egestas sed tempus urna et. Nibh ipsum consequat 
                    nisl vel. 
                </Text>
            </View>
        </View>
        </ScrollView>
    )
}
// const styles = StyleSheet.create({
//     button: {
//         borderRadius: 32,
//         paddingVertical: 14,
//         marginTop:10,
//         width:10,
//         color:'coral',
//         paddingHorizontal: 10,
//         backgroundColor: '#12A2FA',
//     },
// })