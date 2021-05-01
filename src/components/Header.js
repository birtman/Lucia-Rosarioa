import React from 'react'
import Link from 'gatsby-link'
import "./Header.css"
import styled from "styled-components"

const Button = styled.button`
font-size: 17px;
    font-weight: 600;
    color: white;
    background: rgba(137,203,192,0.9);
    padding: 9px 20px;
    border: 1px solid rgba(245,164,144,0.25);
    border-radius: 20px;
    outline: none;
    cursor: pointer;
    transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);
    &:hover {
      background: white;
    box-shadow: 010px 20px rgba(0,0,0,0.25);
    transform: translateY(-3px);
    color: #f5a490;
    }
    `
    const HeaderLinkGroup = styled.button`

    &:hover {
      background: white;
    box-shadow: 010px 20px rgba(0,0,0,0.25);
    transform: translateY(-3px);
    color: #f5a490;
    }
    `

class Header extends React.Component {

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


if (scrollTop > 50) {
  this.setState({ hasScrolled: true })
} else {
  this.setState({ hasScrolled: false })
}
}


  render() {
    return (
      <div className={this.state.hasScrolled ? "Header HeaderScrolled" : "Header"}>
        <div className="HeaderGroup">
          <Link to="/">Lucia Rosarios</Link>
          <a href="/about">About me</a>
          <a href="/methods">Methods</a>
          <a href="/pricing">Pricing</a>
          <a href="/contact"><Button>Make appointment</Button></a>
        
      </div>
    </div>
    )
  }
}

export default Header