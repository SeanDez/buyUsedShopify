import React, {useState} from "react";
// import { Heading, Page, Card, Button, Tabs } from "@shopify/polaris";
import {makeStyles} from "@material-ui/core/styles";

import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";

import NavBar from "../components/NavBar";
import RulesContainer from "../components/rules/RulesContainer"


const StyleJsx = () => (
  <React.Fragment>
    
    { /*language=SCSS*/ }
    <style jsx global>{`
      
      * {
        font-family: Helvetica, sans-serif;
        
        // 14px: min size at the smallest viewport width of 300px. 26px: max size at the largest viewport width of 1600px
        font-size: calc(14px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));
      }
      
      section {
        margin: 1vh 1vw;
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
      <Toolbar className={jss.navSpacing} />
  
      {/* state based views */}

      <Container>
        {activeView === 'rules' && (
          <RulesContainer
          
          />
        )}
      </Container>
      
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
