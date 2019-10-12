import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { StoreExtra } from './configureStore';
import { AppState } from './appState';

const _createStore = (state: AppState, reducer: any, extra: StoreExtra) => {
    return createStore(
        reducer,
        state,
        applyMiddleware(thunk.withExtraArgument(extra)),
    );
};

export default _createStore;