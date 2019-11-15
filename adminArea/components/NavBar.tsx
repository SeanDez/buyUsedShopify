import React, {useState, useCallback} from 'react';
import styled from "styled-components";
import {makeStyles} from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuItem from "@material-ui/core/MenuItem";



////// Component Functions //////

/** Controls tab labels, and number of tabs as a result
 * Assigns the required id to the label for convenience
 */
const buildTabDescriptorArray = () => {
  const contentLabels = ["Settings", "Open / Issues", "Closed"];
  
  const tabDescriptors: {content: string, id: string}[] = contentLabels.map(label => {
    return {
      content : label,
      id : label
    }
  });
  
  return tabDescriptors;
};


const builtTabs: {content: string, id: string}[] = buildTabDescriptorArray();

const hardCodedTabs = [{id :"Settings", content: "Settings"}, {id : "Open / Issues", content: "Open / Issues"}, {id: "Closed", content : "Closed"}];


// const {Text, Title} = Typography;



////// Component //////
export default props => {
 const {setActiveView} = props;
 
 ////// Component State //////

 ////// Render //////
  return (
    <div id="navContainer">
      <h5 id="navTitle">Buy Back Trade Ins</h5>
      
      
      {/*<nav id="buttonContainer">*/}
      <AppBar>
        <StyledToolbar>
          <MenuItem
            onClick={() => setActiveView('rules')}
          >Rules
          </MenuItem>
          <MenuItem onClick={() => setActiveView('open')}>Open Orders</MenuItem>
          <MenuItem onClick={() => setActiveView('closed')}>Closed</MenuItem>
          <MenuItem onClick={() => setActiveView('settings')}>Settings</MenuItem>
        </StyledToolbar>
      </AppBar>
      
      {/*</nav>*/}
      {/* language=SCSS */}
      
    </div>
  );
}


////// Component Styles //////
const StyledToolbar = styled(Toolbar)`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  
  & > * {
    margin: 0 !important;
    font-size: .8rem;
    padding: 0 5vw !important;
    border: 1px solid rgba(255, 255, 255, .2) !important;
    border-radius: 4px !important;
  }
`;

