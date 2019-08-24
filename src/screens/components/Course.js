import React, { Component } from 'react';
import styled from 'styled-components';

class Course extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { image, title, caption } = this.props
        return (
            <CourseContent>
                <CourseImage source={image} />
                <TitleContainer>
                    <CourseTitle>{title}</CourseTitle>
                    <CourseCaption>{caption}</CourseCaption>
                </TitleContainer>
            </CourseContent>
        )
    }
}


const CourseImage = styled.Image`
        width: 75px;
        height: 61px;
        margin-right: 20px;
        `
const CourseContent = styled.View`
        flex-direction: row;
        margin-top: 30px;
        `
const TitleContainer = styled.View`
        width: 157px;
        height: 37px;
        align-self: flex-start;
        margin-top: 8px;
        margin-bottom: 8px;
        `

const CourseTitle = styled.Text`
        font-size: 16px;
        text-align: left;
        color:#151C2A;
        `
const CourseCaption = styled.Text`
        font-size: 10px;
        font-weight: 600;
        color: #7E8EAA;
        `

export default Course;