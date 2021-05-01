import React from "react"
import "../components/CouplesCard.css"
import styled from "styled-components"




const CouplesCard = props => (
    <div className="CouplesCard">
        <img src={props.image} />
        <h3 style={{ color: `${props.color}` }}>{props.title}</h3>
        <p>{props.text}</p>
    </div>
)

export default CouplesCard