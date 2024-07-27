// Home button

import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { PowerBtn } from '../components/AllSvgs'
import home from "../assets1/wisamlogo1.png";


const Power = styled.div`
position: fixed;
top: 2rem;
left: 50%;
transform: translate(-50%, 0);

background-color: transparent;
// padding: 0.3rem;
// border-radius: 50%;
// border: 1px solid #000;
width: 2.5rem;
height: 2.5rem;

display: flex;
justify-content: center;
align-items:center;
z-index:3;

cursor: pointer;

&:hover{
    // background-color: blue;
    // box-shadow: 0 0 8px 6px rgba(0,255,0,0.2);
}

&>*:first-child{
    text-decoration: none;
    color: inherit;
}
`

const PowerButton = () => {
    return (
      <Power>
        <NavLink to="/">
          <img src={home} width={70} height={70} fill="currentColor" />
          {/* <PowerBtn width={30} height={30} fill="currentColor" /> */}
        </NavLink>
      </Power>
    );
}

export default PowerButton
