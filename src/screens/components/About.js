import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import styled from 'styled-components';

class Lessons extends Component {
    render() {
        return (
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <Container>
                    <Profile>
                        <Avatar />
                        <ProfileName>Dann Petty</ProfileName>
                        <ProfileCaption>Freelance Designer</ProfileCaption>
                    </Profile>
                    <BodyTextContainer>
                        <BodyText>
                            Having used discount toner cartridges for twenty years, there have been a lot of changes in the toner cartridge market. The market today is approximately a twenty billion dollar of the discount cartridges business. The savings today are the quality.
                        </BodyText>
                        <BodyText>
                            Discount toner cartridges were originally sold as recycled toner cartridges. The basic recycling method consisted of drilling a hole in the cartridge and refilling it with toner. Once the cartridge was filled, the hole was plugged. This toner cartridge was then sold to the consumer as a great deal.
                        </BodyText>
                    </BodyTextContainer>
                </Container>
            </ScrollView>
        )
    }
}

const Container = styled.View`
width: 100%;
margin-top: 30px;
margin-bottom: 20px;
height: 376px;
`
const Profile = styled.View`
display: flex;
flex-direction: row;
justify-content: flex-start;
`
const Avatar = styled.Image`
width: 60px;
height: 60px;
border-radius: 30px;
background-color: yellow;

`
const ProfileName = styled.Text`
font-size: 20px;
font-weight: 400;
font-family: 'roboto';
color: #151C2A;
margin-left: 15px;
align-self:center;
`
const ProfileCaption = styled.Text`
font-family: 'roboto';
position: absolute;
font-weight: 400;
color: #7E8EAA;
font-size:10px;
align-self: flex-end;
left: 75px;
`
const BodyText = styled.Text`
color: #7E8EAA;
font-family:'roboto';
font-size: 14px;
font-weight: 300;
line-height: 22px;
text-align: left;
margin-bottom: 10px;
`
const BodyTextContainer = styled.View`
margin-top: 30px;
`

export default Lessons