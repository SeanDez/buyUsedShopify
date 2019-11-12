import React, {useState, useCallback} from 'react';
import styled from "styled-components";
import {makeStyles} from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";


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

    <nav id="buttonContainer">
      <button
        onClick={() => setActiveView('rules')}
      >Rules</button>
      <button onClick={() => setActiveView('open')}>Open Orders</button>
      <button onClick={() => setActiveView('closed')}>Closed</button>
      <button onClick={() => setActiveView('settings')}>Settings</button>
    </nav>
  {/* language=SCSS */}
    <style jsx>{`
      #navContainer > * {
        margin: 0;
        padding: 1vh 1vw 10px 1vw;
        background-color: #084e8a;
      }
      
      #navTitle {
        font-size: 14px;
        font-style: italic;
        text-align: center;
      }
      
      #buttonContainer {
        display : grid;
        grid-gap: 1rem;
        grid-template-columns: repeat(auto-fit, minmax(20px, 1fr));
      }
      
    `}</style>
  </div>
 )
}


////// Component Styles //////

