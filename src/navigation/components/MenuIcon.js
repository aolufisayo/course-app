import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class MenuIcon extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <TouchableOpacity>
                <Icon
                    name={this.props.name}
                    size={26}
                    style={{ marginLeft: 40 }}
                />
            </TouchableOpacity>
        );
    }
}