import React from 'react'
import styled from '@emotion/styled';

const MensajeError = styled.p`
background-color: #b7322c;
padding: 1rem;
color: white;
font-size: 30px;
text-transform: uppercase;
font-weight: bold;
text-align: center;
font-family: "Bebas Neue", cursive;
`

const Error = ({mensaje}) => {
    return ( 
        <MensajeError>{mensaje}</MensajeError>
     );
}
 
export default Error;