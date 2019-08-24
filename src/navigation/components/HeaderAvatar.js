import React from 'react';
import { TouchableOpacity, StyleSheet, Image } from 'react-native';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class HeaderAvatar extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <TouchableOpacity>
                <Image style={styles.container} source={require('../../../assets/dann.jpg')} />
            </TouchableOpacity>
        );
    }
}

/* const Avatar = styled.Image`
width: 40px;
height: 40px;
border-radius: 20px;
margin-right:40px;
`
 */
const styles = StyleSheet.create({
    container: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 40
    }
})