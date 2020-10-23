import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import OnBoarding from '../screens/onBoarding';
import Header from '../shared/header'

const screens = {
    OnBoarding : {
        screen: OnBoarding,
        navigationOptions: ({ navigation }) => {
            return {
              headerTitle: () => <Header navigation={navigation} />
            }
        },
    }
}
const OnBoardingStack = createStackNavigator(screens);
  
export default OnBoardingStack;