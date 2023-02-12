import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"

const Div = styled.div`
    width: 33%;
    position: sticky;
    top: 80px;
    height: 100%;
`

const Box = styled.div`

    max-height: 86vh;
    overflow-y: auto;
    box-shadow: 0 0 6px 0 rgb(0 0 0 / 26%);
    background-color: #fff;
    padding: 10px;
    border-radius: 10px;
    align-items: center;
    display: flex;
    justify-content: center;

`
const Button = styled(Link)`
font-weight: bold;
text-decoration-line: none;
color: green;
font-family: "McLaren", cursive;
background-color: white;
border: 2px solid #4CAF50;
border-radius: 5px;
transition-duration: 0.4s;
padding: 15px 32px;
text-align: center;
display: inline-block;
font-size: 16px;
margin: 15px auto;
cursor: pointer;
:hover{
    color: white;
    background-color: green;
}
`

export default function BookNow() {
    return (
        <Div>
            <Box>
            <Button to='/'>Book a Table</Button>
            </Box>
        </Div>

    )
}