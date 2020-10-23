import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import BenefitsPreview from '../screens/benefitsPreview';
import Header from '../shared/header'

const screens = {
    BenefitsPreview : {
        screen: BenefitsPreview,
        navigationOptions: ({ navigation }) => {
            return {
              headerTitle: () => <Header navigation={navigation} />
            }
        },
    }
}
const BenefitsPreviewStack = createStackNavigator(screens);
  
export default BenefitsPreviewStack;