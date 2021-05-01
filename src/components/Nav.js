import React from 'react'
import Link from 'gatsby-link'
import "./Header.css"



class Nav extends React.Component {

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
          <Link to="/about">About me</Link>
          <Link to="/methods">Methods</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/contact"><button>Make appointment</button></Link>
      </div>
    </div>
    )
  }
}

export default Nav