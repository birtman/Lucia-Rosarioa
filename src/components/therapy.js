import React from "react"
import styled from "styled-components"


const TherapyGroup = styled.div`
display: flex;
align-items: center;
justify-content:center;
flex-direction: column;
line-height: 1.5;
`

const TherapyBoxOrange = styled.div`
display: flex;
align-items: center;
justify-content:center;
color: #414A45;
font-size: 30px;
background: #FFED00;
border: 3px solid #FFED00;
margin: 40px;
max-width: 1000px;
padding: 5%;
flex-direction: column;
@media (max-width: 640px) {
        width: 500px;
        font-size: 24px;
    }
    @media (max-width: 400px) {
        width: 300px;
        font-size: 16px;
        height: 100px;
        border: 1px solid #FFED00;
    }


`

const TherapyBoxGreen = styled.div`
display: flex;
align-items: center;
justify-content:center;
color: #414A45;
font-size: 30px;
background: #89CBC0;
border: 3px solid #89CBC0;
margin: 10%;
max-width: 1000px;
padding: 5%;
flex-direction: column;
@media (max-width: 640px) {
        width: 500px;
        font-size: 24px;
    }
    @media (max-width: 400px) {
        width: 300px;
        font-size: 16px;
        height: 100px;
        border: 1px solid #89CBC0;
    }


`


const Therapy = () => (
    <TherapyGroup>
       
        <TherapyBoxOrange><p>We are all members of several systems, ranging from close family and friends to the society and culture we live in. Members within systems are in constant interaction and influence each other. Over time, this influence naturally results in the emergence of rules and patterns. </p></TherapyBoxOrange> 
        <TherapyBoxGreen><p>Systems can also be internal. The way we think about and talk to ourselves leads to certain behaviours, also resulting in patterns.  </p></TherapyBoxGreen> 
        <TherapyBoxOrange><p>These patterns and rules, whether external or internal, can sometimes they become too rigid. The lack of flexibility in our relationships, with ourselves and others, can lead to suffering and despair. We often find ourselves stuck within these dysfunctional patterns and in need of change.  </p></TherapyBoxOrange> 
        <TherapyBoxGreen><p>Systemic therapy works by observing these patterns, identifying when they become stuck, and helping the individual change their perspectives and find news solutions.  </p></TherapyBoxGreen>
        <TherapyBoxOrange><p>We all possess certain qualities that help them navigate life more easily, in therapy this is called a resource. Systemic therapy is resource-oriented. We identify your strengths and work to get the most out of them so that you can live the life you want to live. </p></TherapyBoxOrange> 
        <TherapyBoxGreen><p>Systemic therapy is focused by definition. We collaborate to construct goals that guide the therapeutic process leading to tangible results and shorter therapies. </p></TherapyBoxGreen>
        <TherapyBoxOrange><p>The approach is brief, compared to other therapies. Meetings are usually held every two to four weeks, aiming for emotional independence. </p></TherapyBoxOrange> 
       
    </TherapyGroup>

)

export default Therapy