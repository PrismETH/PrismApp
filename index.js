import { AppRegistry, YellowBox } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
import { setConfig } from 'ethereum-prism-lib';

setConfig({
    nodeUrl: "http://127.0.0.1:7545",
    contractAddress: "0x3187A668605846B7c8C2Ad6522285c1C47C16F5E",
    minConfirmationsRequired: 1,
    mnemonicPath: "m/44'/60'/0'/0/0",
    testMnemonic: "nephew apology bacon pelican country escape emerge prepare leave easily wrist wealth",
    testPrivateKey: "0xdd59bd0a4ba35409751392832ed02d8da9be403a7be5d3e3d7d80fae9d1bfb7e",
})

YellowBox.ignoreWarnings([
    'Remote debugger is in a background tab',
    'Saw setTimeout with duration 120000ms',
    'Module RNSecureKeyStore requires main queue',
    'Warning: componentWillReceiveProps',
    'Require cycle:',
    'Warning: componentWillMount',
]);

AppRegistry.registerComponent(appName, () => App);
