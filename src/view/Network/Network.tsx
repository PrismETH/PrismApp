import { Network } from '@utils/Network';
import { WaitingWithdraw } from '@utils/WaitingWithdraw';
import React from 'react';
import { SafeAreaView, View, Linking } from 'react-native';
import { NavigationParams, NavigationScreenProp, NavigationState } from 'react-navigation';
import List from './List/List';
import styles from './Network.style';

interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
    network: Network;
    totalTransfersCount: number;
    totalTransfersAmount: string;
    totalWithdrawsCount: number;
    totalWithdrawsAmount: string;
    waitingWithdraws: WaitingWithdraw[];
    loadStatistic: () => void;
}
interface State {
    isRefreshing: boolean;
}

class NetworkScreen extends React.Component<Props, State> {
    static navigationOptions = () => ({
        title: 'Network details',
    });

    state = {
        isRefreshing: false,
    }

    componentDidMount() {
        this._handleOnRefresh();
    }

    _handleOnTransactionPress = (id: string) => {
        const { network } = this.props;
        const url = network.etherscan + id
        Linking.openURL(url);
    }

    _handleOnRefresh = async () => {
        const { loadStatistic } = this.props;
        this.setState({ isRefreshing: true });
        await loadStatistic();
        this.setState({ isRefreshing: false });
    }

    render() {
        const { network, waitingWithdraws } = this.props;
        const { totalTransfersCount, totalTransfersAmount, totalWithdrawsCount, totalWithdrawsAmount } = this.props;
        const { isRefreshing } = this.state;
        return (
            <React.Fragment>
                <SafeAreaView style={styles.safeAreaView}>
                    <View style={styles.containerView}>
                        <List
                            isRefreshing={isRefreshing}
                            network={network}
                            waitingWithdraws={waitingWithdraws}
                            totalTransfersCount={totalTransfersCount}
                            totalTransfersAmount={totalTransfersAmount}
                            totalWithdrawsCount={totalWithdrawsCount}
                            totalWithdrawsAmount={totalWithdrawsAmount}
                            onTransactionPress={this._handleOnTransactionPress}
                            onRefresh={this._handleOnRefresh}
                        />
                    </View>
                </SafeAreaView>
            </React.Fragment>
        );
    }
}

export default NetworkScreen;
export { Props };

