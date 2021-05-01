import React from "react"
import styled from "styled-components"
import CouplesCard from "../components/CouplesCard"
import Wave from "../components/Wave"

const CouplesGroup = styled.div`
display: flex;
align-items: flex-start;
justify-content:center;
flex-direction: column;
line-height: 1.7;
position:relative;

`

const BubbleGroup = styled.div`
display: flex;
margin-bottom: 100px;
@media (max-width: 1040px) {
    flex-direction: column;
    }
`

const CouplesCaption = styled.p`
font-weight: 600;
font-size: 36px;
color: #f5a490;
margin-left: 60px;
margin-bottom: 60px;
margin-top: 100px;
z-index: 400;
`

const WaveBottom = styled.div`
position: absolute;
width: 100%;
bottom: -6px;
`

const WaveTop = styled.div`
position: absolute;
width: 100%;
top: -100px;

`



const orange = "#F5A490";
const green = "#89CBC0";


const Couples = () => (
    <CouplesGroup>
    <WaveTop><Wave /></WaveTop>
        <CouplesCaption>Voices from a couple I worked with</CouplesCaption>
    <BubbleGroup>
    <CouplesCard 
    title="30 years, Argentina"
    text="»We had a very good experience working with Lucia. From the first session she made her approach clear and explained everything. She focused on our issues and gave practical solutions while always emphasizing we need to do the work. Overall I would highly suggest her to any couples wanting to resolve issues & improve their relationship.«"
    image={require("../images/BubbleWhiteLeftShadow2.png").default}
    color={green}
    />
      <CouplesCard 
    title="30 years, Argentina"
    text="»At first i was quite sceptical about the idea of couples therapy. But Lucia created a comfortable and open setting where me and my partner could open up and with subtle points of advice and help work on our relationship. And actually helped our whole way of communication and seeing things in perspective.«"
  image={require("../images/BubbleWhiteRightShadow.png").default}
  color={orange}
    />
    </BubbleGroup>
    </CouplesGroup>

)

export default Couples