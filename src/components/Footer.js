import React from "react"
import styled from "styled-components"

const FooterGroup = styled.div`
background: #F5A490;
padding: 50px;
display: grip;
grid-gap: 20px;
`

const Text = styled.p`
font-size: 24px;
font-weight: 600;
color: white;
`

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

const LinkGroup = styled.div`
width: 500px;
margin: 50px auto;
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-gap: 10px;
a {
  color: white;
  transition: 0.8s
}
a:hover {
  color: black;
}

`
const Copyright = styled.div`
color: white;
max-width:500px;

`

const Footer = ({data}) => (
<FooterGroup>
<Text>Ready to talk? I’m here to listen.</Text>
<LinkGroup><a href="/">Lucia Rosarios</a>
          <a href="/about">About me</a>
          <a href="/methods">Methods</a>
          <a href="/pricing">Pricing</a>
          <a href="/contact"><Button>Make appointment</Button></a></LinkGroup>
          <Copyright>Lucia Rosarios ©2021</Copyright>
      </FooterGroup>
)

export default Footer

/*const Footer = ({data}) => (
  <FooterGroup>
  <Text>Ready to talk? I’m here to listen.</Text>
  <LinkGroup>{data.allContentfulLink.edges.map(edge => (
          <a href={edge.node.url}>{edge.node.title}</a>
        ))}</LinkGroup>
        </FooterGroup>
  )*/