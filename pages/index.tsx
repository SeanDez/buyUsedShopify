import React, {useState} from "react";
// import { Heading, Page, Card, Button, Tabs } from "@shopify/polaris";
import {makeStyles} from "@material-ui/core/styles";
import "typeface-roboto";

import NavBar from "../components/NavBar";
import RulesContainer from "../components/rules/RulesContainer"


const StyleJsx = () => (
  <React.Fragment>
    
    { /*language=SCSS*/ }
    <style jsx global>{`
      
      body {
        // 14px: min size at the smallest viewport width of 300px. 26px: max size at the largest viewport width of 1600px
        font-size: calc(14px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));
        background-color: wheat;
      }
      
      p, h1, h2, h3, h4, h5, h6 {
        font-family: Roboto, Helvetica, sans-serif;
        color: rgba(30, 30, 30, .9);
      }
      
      button {
        color : whitesmoke;
        padding-top: 4px;
        padding-bottom: 4px;
      }
      
      section {
        margin: 2vh 2vw;
        padding: 2vh 2vw;
        background-color: white;
        
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        border-radius: 2px;
      }
      
      section > * {
        padding: 1vh .5vw;
      }
      
      h3 {
        font-size: calc(26px + (38 - 14) * ((100vw - 300px) / (1600 - 300)));
      }
      
      h5 {
        font-size: calc(20px + (32 - 14) * ((100vw - 300px) / (1600 - 300)));
      }
      
      button {
        border: none;
        border-radius: 2vw;
        cursor: pointer;
        background-color: #5c6ac4;
      }
      
    `}</style>
  </React.Fragment>
)

const Index = () => {
  const jss = defineStyles();
  
  const [activeView, setActiveView] = useState<string>('rules');
  
  return (
    <div>
      <StyleJsx />
      
      {/* MOBILE Nav Menu */}
      <NavBar
        activeView={activeView}
        setActiveView={setActiveView}
      />
      
  
      {/* state based views */}
      
      {activeView === 'rules' && (
        <RulesContainer
        
        />
      )}
      
    </div>
  );
};

export default Index;

////// Styling //////
const defineStyles = makeStyles({
  navSpacing : {
    marginBottom: 60
  }
});
