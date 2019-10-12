import DashboardScreen from '@view/Dashboard/Dashboard.redux';
import NetworkScreen from '@view/Network/Network.redux';
import SplashScreen from '@view/Splash/Splash';
import React from 'react';
import { Transition } from 'react-native-reanimated';
import { createAppContainer } from 'react-navigation';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { createStackNavigator } from 'react-navigation-stack';

const ROUTES = {
    SPLASH: "SPLASH",
    DASHBOARD: "DASHBOARD",
    NETWORK: "NETWORK",
};

// Dashboard navigator
const dashboardNavigator = createStackNavigator(
    {
        [ROUTES.DASHBOARD]: DashboardScreen,
        [ROUTES.NETWORK]: NetworkScreen,
    },
    {
        initialRouteName: ROUTES.DASHBOARD,
    },
);

// Root navigator
const rootNavigator = createAnimatedSwitchNavigator(
    {
        [ROUTES.SPLASH]: SplashScreen,
        ["DASHBOARD-NAVIGATOR"]: dashboardNavigator
    },
    {
        transition: (
            <Transition.Together>
                <Transition.Out type={"fade"} durationMs={500} />
                <Transition.In type={"fade"} durationMs={500} />
            </Transition.Together>
        ),
    },
);

// AppContainer
const AppContainer = createAppContainer(rootNavigator);

export default AppContainer
export { ROUTES };

