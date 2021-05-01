import React from 'react'
import Link from 'gatsby-link'
import Card from "../components/Card"
import Section from "../components/Section"
import "../layouts/index.css"
import Nav from "../components/Nav"
import staticdata from "../../staticdata.json"
import Cell from "../components/Cell"
import styled from "styled-components"
import Wave from "../components/Wave"
import Layout from "../layouts/index"
import Header from "../components/Header"
import Footer from "../components/Footer"
import ReadyToTalk from "../components/ReadyToTalk"
import Couples from "../components/Couples"
import Method from "../components/Method"

const SectionCaption = styled.p`
font-weight: 600;
font-size: 36px;
color: #f5a490;
margin-left: 60px;
margin-bottom: 100px;
z-index: 400;
`

const SectionCellGroup = styled.div`
max-width: 800px;
margin: 0 auto;
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-column-gap: 20px;
padding: 0 20px;
align-items: center;
justify-content: center;
margin-bottom: 200px;



@media (max-width: 800px) {
  grid-template-columns: repeat(1, 1fr);
}
`


const IndexPage = () => (
  <div>
     <Header />
    <div className="Hero">
      <div className="HeroGroup"> 
        <h1>Psychotherapist<br /> Lucia Rosarios</h1>
        <p>English and Spanish speaking therapist from Argentina with a focus in Systemic, Strategic and Brief Psychotherapy.</p>
        <p>I see therapy as the experience of an intimate and authentic relationship which, over a short period, results in transformative change.</p>
       <ReadyToTalk />
        
 <Wave />
    </div>
  </div>

  <div className="Cards">
    <SectionCaption>Voices from individuals I worked with</SectionCaption>
    <SectionCaption>Voices from individuals I worked with</SectionCaption>
    <div className="CardGroup">
    <Card 
    title="30 years, Argentina"
    text="»I’ve spent around a year working with Lucia.  She helped me gain the skills and confidence I needed to break toxic habits and patterns in my life. Our work together has taught me a great deal about the importance of healthy relationships and how to recognize and deal with unhealthy ones. The personal growth I have achieved while working with Lucia is far more than I imagined possible. I am very proud of myself and I am very grateful for the help.«"
    
    />
      <Card 
    title="30 years, Argentina"
    text="»I found Lucia at a time of heightened anxiety and self doubt after having relocated and starting a new job. Shortly into my first session, I was overcome with a sense of calm because I truly felt heard and understood. I was listened to, but also given great food for thought and actionable steps for many of my anxiety-inducing thoughts. I honestly looked forward to my weekly sessions knowing that with each one, I felt more empowered to face and challenge the underlying issues contributing to how I was feeling. Lucia provides the perfect balance of caring and empathy with the practical so that we can actively contribute to our own healing.«"
  /*image={require("../images/Testimonial.png").default}*/
    />
      <Card 
    title="30 years, Argentina"
    text="»I contacted Lucia in the fall of 2019 to help me get through a difficult period in my marriage. She met with me twice and my wife once. She then suggested that we consider a joint session so she could coach us through a discussion of our perceived problems with one another and put them into context in terms of threats to staying together. Lucia provided a calm and structured environment that allowed us to re-engage with each other on how we could become more aware of the other's feelings and how important we both felt our relationship was to our future happiness. We thank her for her professionalism and guidance to help us get through a difficult time.«"
    /*image={require("../images/Testimonial.png").default}*/
    />
      <Card 
    title="30 years, Argentina"
    text="»My experience with Lucia has been a story of kindness and self-understanding. From expanding my grasp of the emotional spectrum to tackling behaviors that I wanted to change, it's been a wonderful journey. What I enjoyed most is to discover the tools that work for me, something which I am still using at the moment.«"
   /*image={require("../images/Testimonial.png").default}*/
    />

    </div>
  </div>
  <Section
  image={require("../images/wallpaper.jpg").default}
  logo={require("../images/portrait.jpg").default}
  title="Psychotherapist Lucia Rosarios"
  text="Granddaughter of therapists, Lucia understood from an early age the importance of practising the trade. Under our supervision, she has treated hundreds of cases and seen videos sessions of the best therapists in the world. Her level of experience is much higher than her age." 
text3="Hugo Hirsch, Director Centro Privado Psicoterapias, 2018"
text4="Read more about myself"/>
<Couples />

<Section
  image={require("../images/wallpaper3.jpg").default}
  logo={require("../images/wallpaper4.jpg").default}
  title="Method"
  text="Each patient is a unique individual with specific needs. During our time together we will build a comprehensive vision of your strengths and struggles.  Your viewpoints, cultural background and social context will be at the centre of our sessions." 
  text2="The process is honest and collaborative, setting clear objectives that allow the treatment to be focused and deliver tangible results. My goal is to guide you from where you are to where you want to be."
  text4="Read more about my approach"/>
<SectionCaption>I can help with</SectionCaption>
<SectionCellGroup>
{staticdata.cells.map(cell => (
  <Cell title={cell.title}
        />
))}
</SectionCellGroup>


<Footer />
</div>
)

export default IndexPage

