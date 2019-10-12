
import React from 'react';
import { Provider } from "react-redux";
import configureStore from './redux/configureStore';
import Navigator from '@common/Navigator';

const store = configureStore({});

interface Props { }
interface State { }

class App extends React.Component<Props, State> {
    render() {
        return (
            <Provider store={store}>
                <Navigator />
            </Provider>
        );
    }
};

export default App;
