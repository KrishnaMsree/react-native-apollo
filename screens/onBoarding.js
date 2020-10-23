import React, { Component} from 'react';
import {StyleSheet, View, Text, SafeAreaView, ScrollView} from 'react-native';
import { globalStyles } from '../styles/global';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import { AntDesign } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';
// import DocumentPicker from 'react-native-document-picker';

// <AntDesign name="download" size={24} color="black" />
// <AntDesign name="upload" size={24} color="black" />
export default function OnBoarding(){
         
    
      const progressStepsStyle = {
          activeStepIconBorderColor: '#686868',
          activeLabelColor: '#686868',
          activeStepNumColor: 'white',
          activeStepIconColor: '#686868',
          completedStepIconColor: '#686868',
          completedProgressBarColor: '#686868',
          completedCheckColor: '#4bb543'
          
        };
    
        const buttonTextStyle = {
          color: '#686868',
          fontWeight: 'bold'
        };
    
    
    return (
            <View style={{ flex: 1, marginTop: 10}}>
                <ScrollView>
                <Text style={{fontWeight:'bold',fontSize:28,margin:10}}>OnBoarding</Text>
                <ProgressSteps {...progressStepsStyle}>
                <ProgressStep
                    onNext={() => {
                        console.log('called next step');
                      }}
                    onPrevious={() => {
                        console.log('called previous step');
                      }}
                      scrollViewProps={
                        {
                            keyboardShouldPersistTaps: 'handled',
                            contentContainerStyle: {
                              flex: 1,
                              justifyContent: 'center'
                            }
                        }
                    }
                    nextBtnTextStyle={buttonTextStyle}
                    previousBtnTextStyle={buttonTextStyle}
                >
                    <View style={styles.box}>
                        <Text style={styles.boxHeader}>Employee Information</Text>
                        <View style={styles.boxText} >
                            <View style={styles.boxTextView}>
                                <View style={{flexDirection:'row'}}><Ionicons name="md-checkmark-circle" size={24} color="green" />
                                <Text style={{fontSize:16}}>  Employee identification</Text></View>
                                <AntDesign name="download" size={24} color="black" />
                            </View>
                            <View style={styles.boxTextView}>
                            <View style={{flexDirection:'row'}}><Ionicons name="md-checkmark-circle" size={24} color="green" />
                                <Text style={{fontSize:16}}>  Employee social security information</Text></View>                    
                                <AntDesign name="download" size={24} color="black" />
                            </View>
                        </View>
                    </View>
                    <View style={styles.box}>
                        <Text style={styles.boxHeader}>Tax Documents</Text>
                        <View style={styles.boxText} >
                            <View style={styles.boxTextView}>
                                <View style={{flexDirection:'row'}}><Ionicons name="md-warning" size={24} color="maroon" />
                                <Text style={{fontSize:16}}>  Employee corporation filing</Text></View>
                                <AntDesign name="upload" size={24} color="black" />
                            </View>
                            <View style={styles.boxTextView}>
                                <View style={{flexDirection:'row'}}><Ionicons name="md-checkmark-circle" size={24} color="green" />
                                <Text style={{fontSize:16}}>  Employee tax filing 2015-2020</Text></View>                    
                                <AntDesign name="download" size={24} color="black" />
                            </View>
                            <View style={styles.boxTextView}>
                                <View style={{flexDirection:'row'}}><Ionicons name="md-warning" size={24} color="maroon" />
                                <Text style={{fontSize:16}}>  Employer banker contract</Text></View>                    
                                <AntDesign name="upload" size={24} color="black" />
                            </View>
                        </View>
                    </View>
                </ProgressStep>
                <ProgressStep
                    
                    onNext={() => {
                        console.log('called next step');
                      }}
                    onPrevious={() => {
                        console.log('called previous step');
                      }}
                      scrollViewProps={
                        {
                            keyboardShouldPersistTaps: 'handled',
                            contentContainerStyle: {
                              flex: 1,
                              justifyContent: 'center'
                            }
                        }
                    }
                    nextBtnTextStyle={buttonTextStyle}
                    previousBtnTextStyle={buttonTextStyle}
                >
                    <View style={{ alignItems: 'center' }}>
                    <Text>This is the content within step 2!</Text>
                    </View>
                </ProgressStep>
                <ProgressStep
                    
                    onPrevious={() => {
                        console.log('called previous step');
                      }}
                      onNext={() => {
                        console.log('called next step');
                      }}
                      scrollViewProps={
                        {
                            keyboardShouldPersistTaps: 'handled',
                            contentContainerStyle: {
                              flex: 1,
                              justifyContent: 'center'
                            }
                        }
                    }
                    nextBtnTextStyle={buttonTextStyle}
                    previousBtnTextStyle={buttonTextStyle}
                >
                    <View style={{ alignItems: 'center' }}>
                    <Text>This is the content within step 3!</Text>
                    </View>
                </ProgressStep>
                <ProgressStep
                    // label="Fourth"
                    onPrevious={() => {
                        console.log('called previous step');
                      }}
                      onSubmit={() => {
                        console.log('called on submit step.');
                      }}
                    scrollViewProps={
                        {
                            keyboardShouldPersistTaps: 'handled',
                            contentContainerStyle: {
                              flex: 1,
                              justifyContent: 'center'
                            }
                        }
                    }
                    nextBtnTextStyle={buttonTextStyle}
                    previousBtnTextStyle={buttonTextStyle}
                >
                    <View style={{ alignItems: 'center' }}>
                    <Text>This is the content within step 4!</Text>
                    </View>
                </ProgressStep>
                
                </ProgressSteps>
                </ScrollView>
            </View>
    )
}
const styles= StyleSheet.create({
    box:{
        margin:10,
    },
    boxHeader:{
        backgroundColor: 'lightgrey',
        fontSize: 24,
        margin: 10,
        padding:10
    },
    boxTextView:{
        flexDirection:'row',
        justifyContent:'space-between',
        flex: 1,
        fontSize: 24,
        marginLeft:20,
        marginRight:20,
        marginBottom:20,
    },
    boxText:{
        fontSize: 24,
        marginTop:10,
        marginRight:20,
        marginBottom:20,
        backgroundColor:'#F0F0F0'
    }
})