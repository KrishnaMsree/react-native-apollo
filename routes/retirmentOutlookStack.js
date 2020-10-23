import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import RetirementOutlook from '../screens/retirementOutlook';
import Header from '../shared/header'

const screens = {
    RetirementOutlook : {
        screen: RetirementOutlook,
        navigationOptions: ({ navigation }) => {
            return {
              headerTitle: () => <Header navigation={navigation} />
            }
        },
    }
}
const RetirementOutlookStack = createStackNavigator(screens);
  
export default RetirementOutlookStack;