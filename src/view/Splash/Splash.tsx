import React from 'react';
import { NavigationParams, NavigationScreenProp, NavigationState } from 'react-navigation';
import { ROUTES } from '../../common/Navigator';

interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}
interface State { }

class Splash extends React.Component<Props, State> {
    componentDidMount() {
        this._showDashboard()
    }

    _showDashboard = () => {
        const { navigation } = this.props;
        navigation.navigate(ROUTES.DASHBOARD);
    }

    render() {
        return null;
    }
}

export default Splash;
export { Props };
