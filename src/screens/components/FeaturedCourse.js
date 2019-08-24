import React, { Component } from 'react';
import styled from 'styled-components';
import { ScrollView, View } from 'react-native';



class FeaturedCourse extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedIndex: 0
        }
    }

    setSelectedIndex = (event) => {
        console.log(event.nativeEvent)
        //const contentOffset = event.nativeEvent
    }
    render() {
        const images = [
            "https://i.ibb.co/mzykdS4/undraw-design-tools-42tf.png",
            "https://i.ibb.co/mzykdS4/undraw-design-tools-42tf.png",
            "https://i.ibb.co/mzykdS4/undraw-design-tools-42tf.png"
        ]
        return (
            <>
                <TitleContainer>
                    <HeaderTitle>Featured</HeaderTitle>
                </TitleContainer>
                <Container>
                    <ScrollView
                        horizontal={true}
                        pagingEnabled
                        showsHorizontalScrollIndicator={false}
                        onScrollEndDrag={this.setSelectedIndex}
                    >
                        {images.map((image, index) => (
                            <CourseImage key={index} source={{ uri: image }} />
                        )
                        )}

                    </ScrollView>
                    <IndicatorContainer>
                        {
                            images.map((image, index) => (
                                <IndicatorCircle key={index} />
                            ))
                        }
                    </IndicatorContainer>
                </Container >
            </>
        )
    }
}

const Container = styled.View`
height: 257px;
flex-direction: row;
margin-bottom: 25px;
margin-top: 70px;
`
const CourseImage = styled.Image`
flex-direction: row;
width: 295px;
height: 175px;
`

const IndicatorContainer = styled.View`
width: 100%;
position: absolute;
justify-content:center;
align-content: center;
height: 12px;
top: 180px;
display: flex;
flex-direction: row;
`
const IndicatorCircle = styled.View`
width: 10px;
height: 10px;
border-radius: 5px;
margin-right: 10px;
background-color: #BFC3F8;
`
const HeaderTitle = styled.Text`
font-family: 'roboto';
font-size: 24px;
text-align: left;
color: #151C2A;
font-weight: 700;

`
const TitleContainer = styled.View`
margin-left: 40px;
position: absolute;
top: 10px;
bottom: 25px;

`

export default FeaturedCourse;