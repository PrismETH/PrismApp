import { AppStatePrism, AppStatePrismStats } from "@redux/appState";
import { AnyAction } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { PrismNode } from "ethereum-prism-lib";

enum TYPES {
    KEY = "PRISM_LOAD_STATISTIC",
}

interface LoadStatisticAction {
    type: TYPES;
    statistic: AppStatePrismStats;
}

const loadStatistic = (): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
        const prismNode = new PrismNode();
        const statistic: AppStatePrismStats = {
            totalTransfersCount: await prismNode.getTotalTransfersCount(),
            totalTransfersAmount: await prismNode.getTotalTransfersAmount(),
            totalWithdrawsCount: await prismNode.getTotalWithdrawsCount(),
            totalWithdrawsAmount: await prismNode.getTotalWithdrawsAmount(),
            waitingWithdraws: await prismNode.getWaitingWithdraws(),
        };
        dispatch({
            type: TYPES.KEY,
            statistic: statistic,
        })
    }
}

const keys = [TYPES.KEY];
const reduce = (state: AppStatePrism, action: LoadStatisticAction): AppStatePrism => {
    switch (action.type) {
        case TYPES.KEY:
            return {
                ...state,
                stats: action.statistic
            }
        default:
            return state;
    }
};

export default {
    action: loadStatistic,
    keys: keys,
    reduce: reduce,
}
