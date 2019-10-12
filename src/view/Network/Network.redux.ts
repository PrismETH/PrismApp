import { AppState, AppStatePrismStats } from "@redux/appState";
import { reducers } from '@redux/reducers/prismReducer';
import { connect } from "react-redux";
import { AnyAction } from 'redux';
import { ThunkDispatch } from "redux-thunk";
import Network, { Props } from "./Network";

const NetworkConnected = connect(
    (state: AppState, props: Props) => {
        const selectedNetwork = props.navigation.getParam("network");
        const network = state.prism.networks.find(k => k.key === selectedNetwork);
        const stats: AppStatePrismStats = state.prism.stats || {};
        return {
            network: network,
            totalTransfersCount: stats.totalTransfersCount || 0,
            totalTransfersAmount: stats.totalTransfersAmount || '0',
            totalWithdrawsCount: stats.totalWithdrawsCount || 0,
            totalWithdrawsAmount: stats.totalWithdrawsAmount || '0',
            waitingWithdraws: stats.waitingWithdraws || [],
        };
    },
    (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        return {
            loadStatistic: () => dispatch(reducers.loadStatistic.action()),
        }
    },
)(Network);
export default NetworkConnected;