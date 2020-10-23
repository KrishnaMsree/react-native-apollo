import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Dashboard from '../screens/dashboard';
import Header from '../shared/header'

const screens = {
    Dashboard : {
        screen: Dashboard,
        navigationOptions: ({ navigation }) => {
            return {
              headerTitle: () => <Header navigation={navigation} />
            }
        },
    }
}
const DashboardStack = createStackNavigator(screens);
  
export default DashboardStack;