import React from 'react'
import Link from 'gatsby-link'
import "./Header.css"
import "./ReadyToTalk.css"
import styled from "styled-components"

const HeroBox = styled.div`
position: fixed;
background: #C1B6C2;
width: 300px;
right: 0;
top: 300px;
z-index: 200;
padding: 40px;
animation: BoxAnimation;
  animation-duration: 8s;
  opacity: 0;
  animation-fill-mode: forwards;
  animation-delay: 0.1s;
  animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);
`

const BoxText = styled.h4`
font-weight: 600;
font-size: 24px;
color: #FFED00;
`

const BoxCaption = styled.p`
font-weight: 600;
font-size: 18px !important;
color: white !important;
margin-bottom: 40px;
`


class ReadyToTalk extends React.Component {

constructor(props) {
  super(props)

  this.state = {
    hasScrolled: false
  }
}


componentDidMount() {
  window.addEventListener("scroll", this.handleScroll)
}

handleScroll = (event) => {
  const scrollTop = window.pageYOffset


if (scrollTop > 600) {
  this.setState({ hasScrolled: true })
} else {
  this.setState({ hasScrolled: false })
}
}


  render() {
    return (
      <div className={this.state.hasScrolled ? "ReadyBox ReadyBoxScrolled" : "ReadyBox"}>
  <HeroBox>
          <BoxText>Ready to talk? I’m here to listen.</BoxText>
          <BoxCaption>What you are going through matters now; I will contact you in under 24 hours.</BoxCaption>
          <Link to="/page-2/">Make appointment</Link>
        </HeroBox>
    </div>
    )
  }
}

export default ReadyToTalk