import React, { Component } from 'react';
import styled from 'styled-components';
import { Dimensions, ScrollView, TouchableOpacity } from 'react-native'
import Course from './Course';

class RecentCourses extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Container>
                <Header>Recently Added</Header>
                <ScrollView
                    showsVerticalScrollIndicator={false}

                >
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("CourseDetail")}>
                        <Course
                            image={require('../../../assets/undraw_country_side_ayop.png')}
                            title="Project Management"
                            caption="3 weeks | 16 Episodes"

                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("CourseDetail")}>
                        <Course
                            image={require('../../../assets/undraw_in_sync_xwsa.png')}
                            title="IT & Cloud Computing"
                            caption="2 weeks | 12 Episodes"

                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("CourseDetail")}>
                        <Course
                            image={require('../../../assets/undraw_taking_notes_tjaf.png')}
                            title="Big Data & Scrapping"
                            caption="e-book"

                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("CourseDetail")}>
                        <Course
                            image={require('../../../assets/undraw_segmentation_uioo.png')}
                            title="Theory of Colors"
                            caption="1 week | 3 Episodes"

                        />
                    </TouchableOpacity>
                </ScrollView>
            </Container>
        )
    }
}


const Container = styled.View`
height: 372px;
margin-left: 20px;
background-color: #FFFFFF;
`
const Header = styled.Text`
margin-left: 20px;
width: 170px;
font-family: 'roboto';
font-weight:700;
color: #151C2A;
opacity: 0.87;
text-align:left;
font-size: 24px;
`

export default RecentCourses;