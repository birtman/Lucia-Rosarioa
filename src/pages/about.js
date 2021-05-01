import React from 'react'
import Link from 'gatsby-link'
import Header from "../components/Header"
import "../layouts/index.css"
import "../pages/about.css"
import styled from "styled-components"
import Wave from "../components/Wave"
import Education from '../components/education'
import Footer from '../components/Footer'

const LinkGroup = styled.div`
display: flex;
align-items: center;
justify-content:center;
flex-direction: column;
line-height: 1.5;
margin: 100px 100px;

`

const AboutMe = () => (
  <div>
  <Header />
  <div className="AboutHero">
      <div className="AboutHeroGroup"> 
        <h1>About me</h1>
        <p>I come from a family of psychotherapists which ignited my passion for the profession from a young age. During my training years, I participated in supervised discussions, surrounded by expert psychologists, and watched hundreds of hours of live sessions. This experience shaped my view of the world and how I understand human interaction. </p>
        <Wave />
    </div>
  </div>

  <Education/>

  <LinkGroup><Link to="/">Go back to the homepage</Link></LinkGroup>
    <Footer />
  </div>
)

export default AboutMe
