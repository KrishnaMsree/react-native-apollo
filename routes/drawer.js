import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

// Stacks
import BenefitsPreviewStack from './benefitsPreviewStack';
import RetirementOutlookStack from './retirmentOutlookStack';
import OnBoardingStack from './onBoardingStack';
import GoalStack from './goalStack';
import DashboardStack from './dashboardStack';

const RootDrawerNavigation = createDrawerNavigator({
    BenefitsPreview:{
        screen : BenefitsPreviewStack
    },
    RetirementOutlook:{
        screen : RetirementOutlookStack
    },
    OnBoarding:{
        screen : OnBoardingStack
    },
    // Dashboard:{
    //     screen : DashboardStack
    // },
    // Goals:{
    //     screen : GoalStack
    // },
})

export default createAppContainer(RootDrawerNavigation)