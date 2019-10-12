import defaultState, { AppState } from "@redux/appState";
import { selectReducer } from "@redux/reducerSelector";
import loadStatistic from "./loadStatistic";

const reducers = {
    loadStatistic,
};

const reducer = (state: AppState = defaultState, action: any) => {
    return selectReducer(state, action, reducers);
};

export { reducer, reducers };

