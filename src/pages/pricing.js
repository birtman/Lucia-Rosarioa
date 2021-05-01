import React from 'react'
import Link from 'gatsby-link'
import Header from "../components/Header"
import "../layouts/index.css"
import "../pages/pricing.css"
import styled from "styled-components"
import Wave from "../components/Wave"
import Therapy from '../components/therapy'
import Footer from '../components/Footer'

const LinkGroup = styled.div`
display: flex;
align-items: center;
justify-content:center;
flex-direction: column;
line-height: 1.5;
margin: 100px 100px;

`

const PricingGroup = styled.div`
display: flex;
align-items: center;
justify-content:center;
flex-direction: column;
line-height: 1.5;

`

const PricingBoxTop = styled.div`
width: 600px;
height: 140px;
display: flex;
align-items: center;
justify-content:center;
font-weight: 600;
color: #F5A490;
font-size: 24px;



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

const PricingBoxBottom = styled.div`
width: 600px;
height: 140px;
display: flex;
align-items: center;
justify-content:center;
flex-direction: column;
color: #414A45;
font-size: 24px;
font-weight: 600;
border: 3px solid #F5A490;
margin-bottom: 100px;
text-align: center;
span:nth-child(2){
color: #F5A490;
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


const Pricing = () => (
  <div>
  <Header />
  <div className="PricingHero">
      <div className="PricingHeroGroup"> 
        <h1>Services and Pricing</h1>
        <p>I work with adolescents and adults, couples and families. Sessions can be conducted in English or Spanish. </p>
        <p>My therapy remains financially viable because the sessions are spaced every two to four weeks. Cancellations must be made 24 hours in advance. </p>
        <Wave />
    </div>
  </div>
  <PricingGroup>
  <PricingBoxTop><p>Individuals</p></PricingBoxTop> 
    <PricingBoxBottom><span>€80 per session </span><span>60 minutes</span></PricingBoxBottom> 
    <PricingBoxTop><p>Couples</p></PricingBoxTop> 
    <PricingBoxBottom><span>€120 per session  </span><span>75 minutes</span></PricingBoxBottom> 
    <PricingBoxTop><p>Families</p></PricingBoxTop> 
    <PricingBoxBottom><span>€80 per session  </span><span>75 minutes</span></PricingBoxBottom> 
        </PricingGroup>
    <LinkGroup><Link to="/">Go back to the homepage</Link></LinkGroup>
    <Footer />
  </div>
)

export default Pricing