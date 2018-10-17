import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';

import './ControlComponents.css';

class ControlComponents extends Component {
    render() {
        return (
            <div className="control-components-wrapper">
                <Icon
                    className="prevTrack"
                    size="big"
                    name="angle double left"
                />
                <Icon onClick={this.playTrack} size="big" name="play" />
                <Icon
                    className="nextTrack"
                    size="big"
                    name="angle double right"
                />
            </div>
        );
    }
}

export default ControlComponents;
