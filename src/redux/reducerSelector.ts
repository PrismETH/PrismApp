import { AppState } from "./appState";

const selectReducer = (state: AppState, action: any, reducers: any) => {
    const keys = Object.keys(reducers);
    for (const key of keys) {
        const reducer = reducers[key];
        if (reducer.keys.includes(action.type)) {
            return reducer.reduce(state, action);
        }
    }
    return state;
};

export {
    selectReducer,
};
