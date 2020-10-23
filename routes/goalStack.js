import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Goals from '../screens/goals';
import Header from '../shared/header'

const screens = {
    Goals : {
        screen: Goals,
        navigationOptions: ({ navigation }) => {
            return {
              headerTitle: () => <Header navigation={navigation} />
            }
        },
    }
}
const GoalStack = createStackNavigator(screens);
  
export default GoalStack;