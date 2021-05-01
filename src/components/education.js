import React from "react"
import styled from "styled-components"

const EducationGroup = styled.div`
display: flex;
align-items: center;
justify-content:center;
flex-direction: column;
line-height: 1.5;

`

const EducationTitle = styled.div`
font-size: 36px;
color: #F5A490;
font-weight: 600;
margin-bottom: 70px;
@media (max-width: 400px) {
font-size: 20px;
    }
`

const Circle = styled.div`
width: 200px;
height: 200px;
background: #F5A490;
border-radius: 50%;
display: flex;
align-items: center;
justify-content:center;
font-weight: 600;
color: #414A45;
font-size: 36px;
z-index: 20;
    @media (max-width: 400px) {
        width: 100px;
height: 100px;
font-size: 18px;
    }
`

const EducationBox = styled.div`
display: flex;
align-items: center;
justify-content:center;

`

const EducationBoxTop = styled.div`
width: 600px;
height: 140px;
display: flex;
align-items: center;
justify-content:center;
font-weight: 600;
color: #414A45;
font-size: 24px;
background: #F5A490;
border: 3px solid #F5A490;
margin-top: 100px;
flex-direction: column;
span:nth-child(2){
color: white;
}
@media (max-width: 640px) {
        width: 500px;
    }
    @media (max-width: 400px) {
        width: 300px;
        font-size: 16px;
        height: 100px;
        border: 1px solid #F5A490;
    }
`

const Line = styled.div`
width: 200px;
height: 3px;
background: #F5A490;
transform: rotate(90deg);
@media (max-width: 400px) {
    height: 1px;
    }
`

const EducationBoxBottom = styled.div`
width: 600px;
height: 140px;
display: flex;
align-items: center;
justify-content:center;

color: #414A45;
font-size: 18px;
border: 3px solid #F5A490;
margin-bottom: 100px;
text-align: center;
@media (max-width: 640px) {
        width: 500px;
    }
    @media (max-width: 400px) {
        width: 300px;
        font-size: 16px;
        height: 100px;
        border: 1px solid #F5A490;
    }
`

const ExperienceGroup = styled.div`
display: flex;
align-items: center;
justify-content:center;

flex-direction: column;

`

const ExperienceTitle = styled.div`
font-size: 36px;
color: #89CBC0;
font-weight: 600;
margin-bottom: 70px;
@media (max-width: 400px) {
font-size: 20px;
    }
`

const ExperienceCircle = styled.div`
width: 200px;
height: 200px;
background: #89CBC0;
border-radius: 50%;
display: flex;
align-items: center;
justify-content:center;
font-weight: 600;
color: #414A45;
font-size: 36px;
z-index: 20;
@media (max-width: 400px) {
        width: 100px;
height: 100px;
font-size: 18px;
    }
`

const ExperienceBox = styled.div`
display: flex;
align-items: center;
justify-content:center;

`

const ExperienceBoxTop = styled.div`
width: 600px;
height: 140px;
display: flex;
align-items: center;
justify-content:center;
font-weight: 600;
color: #414A45;
font-size: 24px;
background: #89CBC0;
border: 3px solid #89CBC0;
margin-top: 100px;
flex-direction: column;
span:nth-child(2){
color: white;
}
@media (max-width: 640px) {
        width: 500px;
    }
    @media (max-width: 400px) {
        width: 300px;
        font-size: 16px;
        height: 100px;
        border: 1px solid #89CBC0;
    }
`

const ExperienceLine = styled.div`
width: 200px;
height: 3px;
background: #89CBC0;
transform: rotate(90deg);
@media (max-width: 400px) {
    height: 1px;
    }
`

const ExperienceBoxBottom = styled.div`
width: 600px;
height: 140px;
display: flex;
align-items: center;
justify-content:center;
color: #414A45;
font-size: 18px;
border: 3px solid #89CBC0;
margin-bottom: 100px;
text-align: center;
@media (max-width: 640px) {
        width: 500px;
    }
    @media (max-width: 400px) {
        width: 300px;
        font-size: 16px;
        height: 100px;
        border: 1px solid #89CBC0;
    }
`

const Education = () => (
    <EducationGroup>
        <EducationTitle><h2>Education</h2></EducationTitle>
        <Circle><p>2016</p></Circle>
        <Line />
        <EducationBoxTop><span>Centro Privado de Psicoterapias</span><span>Buenos Aires, Argentina</span></EducationBoxTop> 
        <EducationBoxBottom><p>Postgraduate degree in Clinical Psychology & IFTA/IACSTE Certification</p></EducationBoxBottom> 
        <Circle><p>2014</p></Circle>
        <Line />
        <EducationBoxTop><span>Universidad Favaloro</span><span>Buenos Aires, Argentina</span></EducationBoxTop> 
        <EducationBoxBottom><p>MS in Psycho-immuno-neuro-endocrinology</p></EducationBoxBottom> 
        <Circle><p>2012</p></Circle>
        <Line />
        <EducationBoxTop><span>Universidad de Belgrano</span><span>Buenos Aires, Argentina</span></EducationBoxTop> 
        <EducationBoxBottom><p>BS in Psychology</p></EducationBoxBottom> 
        <ExperienceGroup>
        <ExperienceTitle><h2>Experience</h2></ExperienceTitle>
        <ExperienceCircle><p>2021</p></ExperienceCircle>
        <ExperienceLine />
        <ExperienceBoxTop><span>Private practice</span><span>Berlin & Munich, Germany</span></ExperienceBoxTop> 
        <ExperienceBoxBottom><p>Mental health care facility that provides in and out patient care</p></ExperienceBoxBottom> 
        <ExperienceCircle><p>2019</p></ExperienceCircle>
        <ExperienceLine />
        <ExperienceBoxTop><span>Private practice</span><span>Amsterdam, Netherlands</span></ExperienceBoxTop> 
        <ExperienceBoxBottom><p>Mental health care facility that provides in and out patient care</p></ExperienceBoxBottom> 
        <ExperienceCircle><p>2014</p></ExperienceCircle>
        <ExperienceLine />
        <ExperienceBoxTop><span>Centro Privado de Psicoterapias</span><span>Buenos Aires, Argentina</span></ExperienceBoxTop> 
        <ExperienceBoxBottom><p>Mental health care facility that provides in and out patient care</p></ExperienceBoxBottom> 
    </ExperienceGroup>
    </EducationGroup>

)

export default Education