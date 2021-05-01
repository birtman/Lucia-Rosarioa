import React from 'react'
import styled from 'styled-components'
import Wave from "../components/Wave"


const SectionHero = styled.div`
 display: flex;
 flex-direction: column;
background: #ECFEFB;
    @media (max-width: 640px) {
       
    }
`

const SectionGroup = styled.div`
    background: url(${props => props.image});

    height: 720px;
    background-size: cover;
    display: grid;
    grid-template-rows: 300px auto;
    grid-gap: 20px;
    position: relative;

    @media (max-width: 640px) {
        height: 820px;
    }
`

const SectionLogo = styled.img`
  height: 720px;
  
`

const SectionTitleGroup = styled.div`
    display: flex;
flex-direction: row;
    margin-bottom: 100px; 
    align-items: center;
    width: 100%;
    @media (max-width: 720px) {
        flex-direction: column;
    }
`

const SectionTextGroup = styled.div`
    display: flex;
flex-direction: column;
width: 50%;
margin: 30px;
@media (max-width: 720px) {
    width: 100%;
    }
`
const SectionLinkGroup = styled.div`
    display: flex;
flex-direction: column;
width: 50%;
margin-top: 60px;
    margin-left: 60px;
@media (max-width: 720px) {
    width: 100%;
    }

`

const SectionTitle = styled.h3`
    color: #F5A490;
    font-size: 36px;
    margin: 0;
    line-height: 1.2;
margin-left: 60px;
margin-bottom: 20px;
margin-top: 80px;
    @media (max-width: 720px) {
        font-size: 24px;
    }
`

const SectionText = styled.p`
    color: #897F8A;
    margin-left: 60px;
    z-index: 200;
    line-height: 1.6;
    font-weight: 600;
`

const SectionMarginal = styled.span`
    color: #89CBC0;
    margin-left: 60px;
    z-index: 200;
    line-height: 1.6;
    font-weight: 600;
    font-size: 16px;
`

const WaveBottom = styled.div`
position: absolute;
width: 100%;
bottom: -6px;
`

const WaveTop = styled.div`
position: absolute;
width: 100%;
top: -6px;
transform: rotate(180deg);
`
const ButtonLink = styled.button`
width: 400px;

font-size: 17px;
    font-weight: 600;
    color: rgba(245,164,144,0.9);
    background: white;
    padding: 15px 30px;
    border: 1px solid rgba(245,164,144,0.95);
    border-radius: 30px;
    outline: none;
    cursor: pointer;
    transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);
    margin-bottom: 20px;
    display: flex;
    
    &:hover {
        color: white;
    background: rgba(245,164,144,0.9);
    box-shadow: 010px 20px rgba(0,0,0,0.25);
    transform: translateY(-3px);

    }
    `


const Section = props => (
    <SectionHero>
	<SectionGroup image={props.image}>
       <WaveTop><Wave /></WaveTop>
       
		<SectionLogo src={props.logo} />


       
        </SectionGroup>
        <SectionTitleGroup>
        <SectionTextGroup>
			<SectionTitle>{props.title}</SectionTitle>
			<SectionText>{props.text}</SectionText>
            <SectionText>{props.text2}</SectionText>
            <SectionMarginal>{props.text3}</SectionMarginal>
            </SectionTextGroup>
            <SectionLinkGroup>
            <a href="/about"><ButtonLink>{props.text4}</ButtonLink></a>
            <a href="/contact"><ButtonLink>Make appointment</ButtonLink></a>
            </SectionLinkGroup>
		</SectionTitleGroup>
        <WaveBottom><Wave /></WaveBottom>
        </SectionHero>

	
)

export default Section