import React from 'react';
import styled from "styled-components";


////// Component Functions //////


const CustomHeader = styled.h3`
  color: red !important;
  border: 2px solid gold !important;
`;


////// Component //////
export default props => {
 const {} = props;
 
 ////// Component State //////
 
 ////// Render //////
 return (
  <React.Fragment>
    <h3>devSpecific index.tsx</h3>
    
    <CustomHeader>Custom Header</CustomHeader>
    
    <h5 style={{color : "green"}}>style object</h5>
  </React.Fragment>
 )
}


////// Component Styles //////
