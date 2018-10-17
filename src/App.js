import React, { Component, Fragment } from 'react';
import { Icon } from 'semantic-ui-react';

import ControlComponents from './components/ControlComponents';
import './App.css';

const { ipcRenderer } = window.require('electron');

class App extends Component {
    openDialogWindow = () => {
        ipcRenderer.send('open-dialog-window');
    };

    componentDidMount() {
        ipcRenderer.on('files', (event, message) => console.log(message));
    }

    render() {
        console.log(this.props);
        return (
            <Fragment>
                <Icon
                    onClick={this.openDialogWindow}
                    size="large"
                    name="folder open"
                />
                <ControlComponents />;
            </Fragment>
        );
    }
}

export default App;
