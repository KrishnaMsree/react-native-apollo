import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import PayOff from '../screens/payOff';
import Header from '../shared/header'

const screens = {
    PayOff : {
        screen: PayOff,
        navigationOptions: ({ navigation }) => {
            return {
              headerTitle: () => <Header navigation={navigation} />
            }
        },
    }
}
const PayOffStack = createStackNavigator(screens);
  
export default PayOffStack;