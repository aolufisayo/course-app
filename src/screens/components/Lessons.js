import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components';

class Lessons extends Component {
    render() {
        return (
            <Container style={{ elevation: 5 }} >
                <LessonCompletedContainer>
                    <LessonCheck />
                    <LessonCompleted>Completed</LessonCompleted>
                </LessonCompletedContainer>
                <LessonTitle>What is Wireframing?</LessonTitle>
                <LessonCaption>Episode 1 | 15:53 mins</LessonCaption>
            </Container>
        )
    }
}

const Container = styled.View`
width: 100%;
margin-top: 30px;
margin-bottom: 20px;
height: 130px;
box-shadow: 10px 5px 5px #FFFFFF;
background-color:#FFFFFF;
`
const LessonTitle = styled.Text`
font-size: 20px;
position: absolute;
font-family: 'roboto';
font-weight: 500;
bottom: 32px;
margin-left: 20px;

`

const LessonCaption = styled.Text`
font-size: 10px;
position: absolute;
font-family: 'roboto';
font-weight: 300;
color: #7E8EAA;
bottom: 17px;
left: 20px;
`
const LessonCompletedContainer = styled.View`
display: flex;
flex-direction: row;
position: absolute;
left: 20px;
top:20px;
justify-content:center;
align-items: center;
`
const LessonCompleted = styled.Text`
margin-left: 5px;
font-family: 'roboto';
font-size: 10px;
font-weight: 400;
color: #7E8EAA;
`
const LessonCheck = styled.View`
width: 10px;
height: 10px;
border-radius: 5px;
background-color: #5BDA8C;
`

export default Lessons