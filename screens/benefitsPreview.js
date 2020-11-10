import React from 'react';
import {View, Text, ScrollView, StyleSheet, Image} from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card'
import { DataTable } from 'react-native-paper';

export default function BenefitsPreview(){
    const profileData = [
        {'first':'Role','second':'Designer','key':1},
        {'first':'Age','second':'24', 'key':2},
        {'first':'Salary','second':'$65,000', 'key':3},
        {'first':'Address','second':'Los Angeles, California', 'key':4},

    ]
    const headings = [{'first':'Plan','second':'Our Contributions','third':'Your Cost', 'key': 5}]
    const healthData = [
        {'plan': 'Basic Plan','our':'$100','your':'$250', 'key':6},
        {'plan': 'Premium Plan','our':'$100','your':'$350', 'key':7},
        {'plan': 'Detail Plan','our':'$100','your':'$350', 'key':8}
    ]
    const dentalVisionData = [
        {'plan': 'Basic Plan','our':'$20','your':'$90 ', 'key':9},
        {'plan': 'Premium Plan','our':'$25 ','your':'$110 ', 'key':10},
    ]
    const loanData = [
        {'plan': 'PLSF','our':'$10 ','your':'$125 ', 'key':11},
        {'plan': 'IAM','our':'$10 ','your':'$200 ', 'key':12},
        {'plan': 'ICM','our':'$10 ','your':'$240 ', 'key':13},
        {'plan': 'PAYE','our':'$10 ','your':'$225 ', 'key':14}
    ]
    const retirement = [
        {'plan': 'LifeInsurance','our':'$200 ','your':'$125 ', 'key':15}
    ]
    return (
        <ScrollView>
        <View style={globalStyles.viewContainer}>
            <Text style={globalStyles.headerText} >Your Benefits Preview</Text>
            <Text style={globalStyles.subTitle}>These are the benefits you will receive if you join Green Hand Energy</Text>
            <Card>
                <Text style={globalStyles.cardText}>Start Date</Text>
                <Text>September 25, 2020</Text>
            </Card>
            <Card>
                <Text style={globalStyles.cardText}>Profile</Text>
                {
                    profileData.map(data => {
                        return (
                        <DataTable.Row key={data.key}>
                            <DataTable.Cell>{data.first}</DataTable.Cell>
                            <DataTable.Cell>{data.second}</DataTable.Cell>
                        </DataTable.Row>
                        )
                    })
                }
            </Card>
            <Card>
                <View style={{flexDirection:'row', marginTop:15}}>
                    <Image source={require('../assets/health.png')} style={styles.headerImage} />
                    <Text style={styles.cardText}>  Health</Text>
                </View>
                <Text style={globalStyles.subTitle}>Contributions per month</Text>
                    <DataTable>
                        {headings.map(head => {
                            return (
                                <DataTable.Header style={{fontWeight:'bold'}} key={head.key}>
                                <DataTable.Title>{head.first}</DataTable.Title>
                                <DataTable.Title>{head.second}</DataTable.Title>
                                <DataTable.Title>{head.third}</DataTable.Title>
                                </DataTable.Header>
                            )
                        })}
                        
                        {
                        healthData.map(data => {
                        return (
                            <DataTable.Row key={data.key} onPress={() => {
                                console.log(`Selected Plan ${data.plan}`)
                            }} >
                            <DataTable.Cell>{data.plan}</DataTable.Cell>
                            <DataTable.Cell>        </DataTable.Cell>
                            <DataTable.Cell>{data.our}</DataTable.Cell>
                            <DataTable.Cell>{data.your}</DataTable.Cell>
                            </DataTable.Row>
                        )})}
                    </DataTable>
                <View style={{flexDirection:'row', marginTop:15}}>
                    <Image source={require('../assets/dental_and_vision.png')} style={styles.headerImage} />
                    <Text style={styles.cardText}>  Dental and Vision</Text>
                </View>
                {/* <Text style={globalStyles.subTitle}>Contributions per month</Text> */}
                    <DataTable>
                        {headings.map(head => {
                            return (
                                <DataTable.Header size={20} key={head.key}>
                                <DataTable.Title>{head.first}</DataTable.Title>
                                <DataTable.Title>{head.second}</DataTable.Title>
                                <DataTable.Title>{head.third}</DataTable.Title>
                                </DataTable.Header>
                            )
                        })}
                        
                        {
                        dentalVisionData.map(data => {
                        return (
                            <DataTable.Row key={data.key} onPress={() => {
                                console.log(`Selected Plan ${data.plan}`)
                            }} >
                            <DataTable.Cell>{data.plan}</DataTable.Cell>
                            <DataTable.Cell>        </DataTable.Cell>
                            <DataTable.Cell>{data.our}</DataTable.Cell>
                            <DataTable.Cell>{data.your}</DataTable.Cell>
                            </DataTable.Row>
                        )})}
                    </DataTable>
                
                <View style={{flexDirection:'row', marginTop:15}}>
                    <Image source={require('../assets/studentLoan.png')} style={styles.headerImage} />
                    <Text style={styles.cardText}>  Student Loan Forgiveness</Text>
                </View>
                {/* <Text style={globalStyles.subTitle}>Contributions per month</Text> */}
                    <DataTable>
                        {headings.map(head => {
                            return (
                                <DataTable.Header size={20} key={head.key}>
                                <DataTable.Title>{head.first}</DataTable.Title>
                                <DataTable.Title>{head.second}</DataTable.Title>
                                <DataTable.Title>{head.third}</DataTable.Title>
                                </DataTable.Header>
                            )
                        })}
                        
                        {
                        loanData.map(data => {
                        return (
                            <DataTable.Row key={data.key} onPress={() => {
                                console.log(`Selected Plan ${data.plan}`)
                            }} >
                            <DataTable.Cell>{data.plan}</DataTable.Cell>
                            <DataTable.Cell>{data.our}</DataTable.Cell>
                            <DataTable.Cell>{data.your}</DataTable.Cell>
                            </DataTable.Row>
                        )})}
                    </DataTable>
                <View style={{flexDirection:'row', marginTop:15}}>
                    <Image source={require('../assets/retirement.png')} style={styles.headerImage} />
                    <Text style={styles.cardText}>  Retirement</Text>
                </View>
                {/* <Text style={globalStyles.subTitle}>Contributions per month</Text> */}
                    <DataTable>
                        {headings.map(head => {
                            return (
                                <DataTable.Header size={20} key={head.key}>
                                <DataTable.Title>{head.first}</DataTable.Title>
                                <DataTable.Title>{head.second}</DataTable.Title>
                                <DataTable.Title>{head.third}</DataTable.Title>
                                </DataTable.Header>
                            )
                        })}
                        
                        {
                        retirement.map(data => {
                        return (
                            <DataTable.Row key={data.key} onPress={() => {
                                console.log(`Selected Plan ${data.plan}`)
                            }} >
                            <DataTable.Cell>{data.plan}</DataTable.Cell>
                            <DataTable.Cell>{data.our}</DataTable.Cell>
                            <DataTable.Cell>{data.your}</DataTable.Cell>
                            </DataTable.Row>
                        )})}
                    </DataTable>
            </Card>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    headerImage: {
      width: 26,
      height: 26,
    //   marginHorizontal: 10
    },
    cardText: {
        fontWeight: 'bold',
        fontSize: 20,
        paddingBottom: 10,
        // paddingTop: 10,
    },
  });