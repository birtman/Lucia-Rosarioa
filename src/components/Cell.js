import React from "react"
import styled from "styled-components"

const CellGroup = styled.div`
display: flex;
align-items: center;
justify-content: center;
position: relative;
    box-shadow: 0 20px 40px rgba(137,203,192,0.25);
    display: grid;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    &:hover {
transform: scale(1.1,1.1);
box-shadow: 0 30px 60px rgba(137,203,192,0.5);
}
`

const CellTitle = styled.div`
font-size: 18px;
border: 1px solid rgba(137,203,192,0.5);
padding: 30px;
margin: 30px;
width: 250px;
color: #897F8A;
font-weight: 600;
text-align: center;

`



const Cell = props => (
    <CellGroup>
        <CellTitle>{props.title}</CellTitle>
    </CellGroup>
)

export default Cell