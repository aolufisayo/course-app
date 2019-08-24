import React, { Component } from 'react';
import styled from 'styled-components';
import { View, Text, TouchableOpacity } from 'react-native';
import Lessons from './components/Lessons';
import About from './components/About';
import Reviews from './components/Reviews';
import HeaderAvatar from './../navigation/components/HeaderAvatar';

class CourseContent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            tabIndex: 0
        }
    }

    switchTabs = (tabIndex) => {
        this.setState({ tabIndex })
    }

    tabs = () => {
        if (this.state.tabIndex === 0) {
            return (
                <Lessons />
            )
        }
        if (this.state.tabIndex === 1) {
            return (
                <Reviews />
            )
        }
        if (this.state.tabIndex === 2) {
            return (
                <About />
            )
        }

    }



    render() {


        return (
            <Container>
                <CourseImage source={require('../../assets/undraw_design_tools_42tf.png')} />
                <CourseTitleContainer>
                    <CourseTitleText>Quick Wireframing in Sketch and XD</CourseTitleText>
                </CourseTitleContainer>
                <CourseMenuContainer>
                    <CourseMenuView>
                        <TouchableOpacity onPress={() => this.switchTabs(0)} >
                            <CourseMenuText>Lessons</CourseMenuText>
                        </TouchableOpacity>
                    </CourseMenuView>
                    <InactiveCourseMenuView>
                        <TouchableOpacity onPress={() => this.switchTabs(1)}>
                            <CourseMenuText>Reviews</CourseMenuText>
                        </TouchableOpacity>
                    </InactiveCourseMenuView>
                    <InactiveCourseMenuView>
                        <TouchableOpacity onPress={() => this.switchTabs(2)}>
                            <CourseMenuText>About</CourseMenuText>
                        </TouchableOpacity>
                    </InactiveCourseMenuView>
                </CourseMenuContainer>
                {this.tabs()}
            </Container>
        )
    }
}

const Container = styled.View`
flex:1;
margin-left: 20px;
margin-right: 20px;
`
const CourseImage = styled.Image`
justify-content: center;
align-items: center;
height: 199px;
margin-top: 20px;
margin-bottom: 20px;
`
const CourseTitleContainer = styled.View`
height: 56px;
left: 0;
right: 0;
`
const CourseTitleText = styled.Text`
font-family: 'roboto';
font-weight: 700;
font-size: 24px;
text-align: left;
width: 227px;
`
const CourseMenuContainer = styled.View`
left: 0;
right: 0;
margin-top: 20px;
display: flex;
flex-direction: row;
`
const CourseMenuView = styled.View`
width: 118px;
height: 50px;
border-width: 2px;
border: solid;
border-radius: 20px;
border-color: #C4DEFC;
justify-content:center;
text-align: center;

`
const CourseMenuText = styled.Text`
font-size: 14px;
text-align: center;
font-family: 'roboto';
font-weight: 400;
color: black;
`

const InactiveCourseMenuView = styled.View`
width: 118px;
height: 50px;
justify-content:center;
text-align: center;

`


export default CourseContent;