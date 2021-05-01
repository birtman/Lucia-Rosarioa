import React from "react"
import styled from "styled-components"
import Wave from "../components/Wave"


const MethodGroup = styled.div`
display: flex;
position: relative;
align-items: center;
justify-content:center;
flex-direction: row;
line-height: 1.5;
width: 100%;
@media (max-width: 1040px) {
    flex-direction: column;
    }
`

const MethodCaption = styled.p`
font-weight: 600;
font-size: 36px;
color: #89CBC0;
margin-left: 60px;

`

const MethodTitleGroup = styled.div`
    display: flex;
flex-direction: column;
    margin-bottom: 200px; 
    width: 50%;
    @media (max-width: 720px) {
        grid-template-columns: 1fr;
    }
`
const MethodText = styled.p`
    color: #897F8A;

    z-index: 200;
    line-height: 1.6;
    font-weight: 600;
`

const MethodImage = styled.div`
   background: url(${props => props.image});
width: 50%;
height: 720px;
background-size: cover;
display: grid;
grid-template-rows: 300px auto;
grid-gap: 20px;
position: relative;
`

const Button = styled.button`
width: 400px;
font-size: 17px;
    font-weight: 600;
    color: white;
    background: rgba(245,164,144,0.9);
    padding: 9px 20px;
    border: 1px solid rgba(245,164,144,0.25);
    border-radius: 20px;
    outline: none;
    cursor: pointer;
    transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);
    margin-bottom: 20px;
 
    &:hover {
      background: white;
    box-shadow: 010px 20px rgba(0,0,0,0.25);
    transform: translateY(-3px);
    color: #f5a490;
    }
    `
    const WaveBottom = styled.div`
    position: absolute;
    width: 100%;
    bottom: -6px;
    `
    
    const WaveTop = styled.div`
    position: absolute;
    width: 100%;
    top: 6px;
    transform: rotate(180deg);
    `

const Method =  props => (
    <MethodGroup>
     <WaveTop><Wave /></WaveTop>
        	<MethodImage image={props.image}>
            <WaveBottom><Wave /></WaveBottom>
        </MethodImage>
        <MethodTitleGroup>
        <MethodCaption>Methods</MethodCaption>
			<MethodText>{props.text}</MethodText>
            <MethodText>{props.text2}</MethodText>
            <a href="/about"><Button>Read more about my approach</Button></a>
            <a href="/contact"><Button>Make appointment</Button></a>
		</MethodTitleGroup>
    </MethodGroup>

)

export default Method