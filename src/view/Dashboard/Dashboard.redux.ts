import { AppState } from "@redux/appState";
import { connect } from "react-redux";
import { Dispatch } from 'redux';
import Dashboard, { Props } from "./Dashboard";

const DashboardConnected = connect(
    (state: AppState, props: Props) => ({
        levels: state.prism.levels,
        networks: state.prism.networks,
        repoUrl: state.prism.repoUrl,
    }),
    (dispatch: Dispatch) => ({}),
)(Dashboard);
export default DashboardConnected;