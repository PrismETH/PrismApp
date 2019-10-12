import { combineReducers } from 'redux';
import defaultState from './appState';
import createStore from './createStore';
import { reducer as prism } from "./reducers/prismReducer";

interface StoreExtra { }

const reducer = combineReducers({
    prism,
});

const configureStore = (extra?: StoreExtra) => {
    return createStore(defaultState, reducer, extra);
};
export default configureStore;
export { StoreExtra };

