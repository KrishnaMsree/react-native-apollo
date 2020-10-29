import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

// Stacks
import BenefitsPreviewStack from './benefitsPreviewStack';
import RetirementOutlookStack from './retirmentOutlookStack';
import OnBoardingStack from './onBoardingStack';
import GoalStack from './goalStack';
import DashboardStack from './dashboardStack';
import PayOffStack from './payOffStack';

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
    Dashboard:{
        screen : DashboardStack
    },
    Goals:{
        screen : GoalStack
    },
    // PayOff:{
    //     screen : PayOffStack
    // },
})

export default createAppContainer(RootDrawerNavigation)