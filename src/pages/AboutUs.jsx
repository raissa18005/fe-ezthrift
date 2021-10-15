import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import sarah from "../assets/images/sarah.jpg";
import tyok from "../assets/images/tyok.jpg";
import raissa from "../assets/images/raissa.jpg";

const Container = styled.div`
    margin-top: 59px;
`;
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
const About = styled.div`
    width: 100%;
    background-color: #f4f1de;
    height: 60vh;
    padding: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    min-width: 50%;
`;
const AboutTitle = styled.h1`
    margin-bottom: 20px;
`;
const AboutDesc = styled.p`
    width: 50%;
    text-align: center;
    letter-spacing: 2px;
`;
const Team = styled.div`
    padding: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
`;
const TeamTitle = styled.h1`
    margin: 10px;
`;
const TeamCards = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    margin: 10px;
`;
const TeamCard = styled.div`
    min-width: 180px;
    height: 360px;
    padding: 10px;
    background-color: #fafaf9;
    display: flex;
    align-items: center;
    flex-direction: column;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
`;

const TeamImage = styled.img`
    width: 100%;
    object-fit: cover;
`;
const TeamName = styled.div`
    margin: 10px;
    font-weight: bold;
`;
const TeamPos = styled.div``;

const AboutUs = () => {
    return (
        <Container>
            <Navbar />
            <Wrapper>
                <About>
                    <AboutTitle>About EzThrift</AboutTitle>
                    <AboutDesc>
                        EzThrift adalah aplikasi yang menyediakan tempat untuk
                        membeli pakaian thrifting dengan harga miring serta
                        menjual pakaian-pakaian tidak terpakai serta bergerak
                        dalam bidang sosial dengan membuka donasi pakaian untuk
                        orang-orang yang membutuhkan
                    </AboutDesc>
                </About>
                <Team>
                    <TeamTitle>Tim Pengembang EzThrift </TeamTitle>
                    <TeamCards>
                        <TeamCard>
                            <TeamImage src={sarah} />
                            <TeamName>Sarah Navianti D</TeamName>
                            <TeamPos>UI/UX Designer</TeamPos>
                        </TeamCard>
                        <TeamCard>
                            <TeamImage src={raissa} />
                            <TeamName>Raissa Amini</TeamName>
                            <TeamPos>Frontend Engineer</TeamPos>
                        </TeamCard>
                        <TeamCard>
                            <TeamImage src={tyok} />
                            <TeamName>Tyko Zidane B</TeamName>
                            <TeamPos>Backend Engineer</TeamPos>
                        </TeamCard>
                    </TeamCards>
                </Team>
            </Wrapper>
            <Footer />
        </Container>
    );
};

export default AboutUs;
