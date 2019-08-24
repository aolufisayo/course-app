import React, { Component } from 'react';
import styled from 'styled-components';
import { Dimensions } from 'react-native';
import RecentCourses from './components/RecentCourses';
import FeaturedCourse from './components/FeaturedCourse';
import MenuIcon from '../navigation/components/MenuIcon';
import HeaderAvatar from '../navigation/components/HeaderAvatar';

class CoursesHome extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerLeft: () => (
            <MenuIcon name="menu" size={24} />
        ),
        headerRight: (
            <HeaderAvatar />
        )
    })

    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Container>
                <FeaturedCourse />
                <RecentCourses navigation={this.props.navigation} />
            </Container>
        )
    }
}

const Container = styled.View`
flex:1;
`

export default CoursesHome;