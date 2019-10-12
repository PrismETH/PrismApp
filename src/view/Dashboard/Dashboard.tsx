import { info, network } from '@assets/icons';
import AppButton from '@common/AppButton';
import { Theme } from '@common/AppButton/AppButton';
import AppText from '@common/AppText';
import { ROUTES } from '@common/Navigator';
import QRCode from '@common/QRCode';
import { formatEth } from '@utils/formatter';
import { Network } from '@utils/Network';
import { setConfig } from 'ethereum-prism-lib';
import React from 'react';
import { Clipboard, Image, Linking, SafeAreaView, TouchableOpacity, View } from 'react-native';
import Toast from 'react-native-root-toast';
import { NavigationParams, NavigationScreenProp, NavigationState } from 'react-navigation';
import styles from './Dashboard.style';
import LevelsModal from './LevelsModal';
import NetworksModal from './NetworksModal';

interface Props {
    levels: number[];
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
    networks: Network[];
    repoUrl: string;
}
interface State {
    levelsModalIsVisible: boolean;
    networksModalIsVisible: boolean;
    selectedLevel?: number;
    selectedNetwork?: string;
}

class DashboardScreen extends React.Component<Props, State> {
    static navigationOptions = ({ navigation }) => ({
        title: 'Prism App',
        headerLeft: (
            <TouchableOpacity onPress={navigation.getParam('handleNetwork')}>
                <Image
                    style={styles.navigationNetworkImage}
                    source={network}
                    resizeMode={"contain"} />
            </TouchableOpacity>
        ),
        // headerRight: (
        //     <TouchableOpacity onPress={navigation.getParam('handleInfo')}>
        //         <Image
        //             style={styles.navigationInfoImage}
        //             source={info}
        //             resizeMode={"contain"} />
        //     </TouchableOpacity>
        // ),
    });

    state = {
        levelsModalIsVisible: false,
        networksModalIsVisible: false,
        selectedLevel: 0.5,
        selectedNetwork: "mainnet",
    }

    componentDidMount() {
        this._configNetwork();
        this.props.navigation.setParams({
            handleNetwork: this._handleNetwork,
            handleInfo: this._handleInfo,
        });
    }

    componentDidUpdate(props, state) {
        if (state.network !== this.state.selectedNetwork) {
            this._configNetwork();
        }
    }

    _configNetwork = () => {
        const { networks } = this.props;
        const { selectedNetwork } = this.state;
        const network = networks.find(k => k.key === selectedNetwork);
        setConfig({
            nodeUrl: network.url,
            contractAddress: network.address,
        })
    }

    _handleNetwork = () => {
        const { navigation, } = this.props;
        const { selectedNetwork } = this.state;
        navigation.navigate(ROUTES.NETWORK, {
            network: selectedNetwork,
        });
    }

    _handleInfo = () => { }

    _handleChangeLevel = () => {
        this.setState({ levelsModalIsVisible: true });
    }

    _handleLevelOnClose = () => {
        this.setState({ levelsModalIsVisible: false });
    }

    _handleLevelOnSelect = (level: number) => {
        this.setState({
            selectedLevel: level,
            levelsModalIsVisible: false,
        });
    }

    _handleChangeNetwork = () => {
        this.setState({ networksModalIsVisible: true });
    }

    _handleNetworkOnClose = () => {
        this.setState({ networksModalIsVisible: false });
    }

    _handleNetworkOnSelect = (network: Network) => {
        this.setState({
            selectedNetwork: network.key,
            networksModalIsVisible: false,
        });
    }

    _handleContractCopy = () => {
        const { networks } = this.props;
        const { selectedNetwork } = this.state;
        const network = networks.find(k => k.key === selectedNetwork);
        const contractAddress = network && network.address;
        Clipboard.setString(contractAddress)

        // show toast
        Toast.show('The address has been copied to the clipboard.', {
            duration: Toast.durations.LONG,
            position: Toast.positions.BOTTOM,
            shadow: true,
            animation: true,
            hideOnPress: true,
        });
    }

    _handleViewRepository = () => {
        const { repoUrl } = this.props;
        Linking.openURL(repoUrl);
    }

    render() {
        const { levels, networks } = this.props;
        const { levelsModalIsVisible, networksModalIsVisible, selectedLevel, selectedNetwork } = this.state;
        const levelString = formatEth(selectedLevel);
        const network = networks.find(k => k.key === selectedNetwork);
        const contractName = network && network.name;
        const contractAddress = network && network.address;
        const ethereumLink = `ethereum:{contractAddress}?value=${selectedLevel}`
        const networkTheme = network.isTestNet ? Theme.RED : Theme.GREEN;

        return (
            <React.Fragment>
                <SafeAreaView style={styles.safeAreaView}>
                    <View style={styles.containerView}>
                        {/* header */}
                        <View style={styles.headerView}>
                            <View style={styles.headerItemView}>
                                <AppText style={styles.headerItemText}>
                                    {"Transferred amount"}
                                </AppText>
                                <AppButton onPress={this._handleChangeLevel}>
                                    {levelString}
                                </AppButton>
                            </View>
                            <View style={styles.headerSeparatorView} />
                            <View style={styles.headerItemView}>
                                <AppText style={styles.headerItemText}>
                                    {"Network"}
                                </AppText>
                                <AppButton
                                    theme={networkTheme}
                                    onPress={this._handleChangeNetwork}
                                >
                                    {contractName}
                                </AppButton>
                            </View>
                        </View>

                        {/* content */}
                        <View style={styles.contentView}>
                            <TouchableOpacity onPress={this._handleContractCopy}>
                                <AppText style={styles.addressTitleText}>
                                    {"Contract address:"}
                                </AppText>
                                <AppText style={styles.addressText}>
                                    {contractAddress}
                                </AppText>
                            </TouchableOpacity>
                            <QRCode
                                size={300}
                                value={ethereumLink}
                            />
                        </View>

                        {/* footer */}
                        <View style={styles.footerView}>
                            <AppButton onPress={this._handleViewRepository}>
                                {"View on Github"}
                            </AppButton>
                        </View>
                    </View>
                </SafeAreaView>

                {/* levels modal */}
                <LevelsModal
                    isVisible={levelsModalIsVisible}
                    levels={levels}
                    level={selectedLevel}
                    onClose={this._handleLevelOnClose}
                    onSelect={this._handleLevelOnSelect}
                />

                {/* networks modal */}
                <NetworksModal
                    isVisible={networksModalIsVisible}
                    networks={networks}
                    network={selectedNetwork}
                    onClose={this._handleNetworkOnClose}
                    onSelect={this._handleNetworkOnSelect}
                />
            </React.Fragment>
        );
    }
}

export default DashboardScreen;
export { Props };

