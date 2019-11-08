import React, {useState, useCallback} from 'react';
import styled from "styled-components";

import {Button as PolarisButton} from "@shopify/polaris";

import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";

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


////// Component //////
export default props => {
 const {} = props;
 
 ////// Component State //////
  const [selectedTab, setSelectedTab] = useState<string>('rules');

 ////// Render //////
 return (
  <React.Fragment>
    <Paper>
      <Tabs
        value={selectedTab}
        onChange={(event, newValue) => setSelectedTab(newValue)}
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab label="Rules" value="rules" />
        <Tab label="Open / Issue Tickets" value="openIssue" />
        <Tab label="Closed Tickets" value="closed" />
        <Tab label="Settings" value="settings" />
      </Tabs>
    </Paper>
  
    <BottomMarginSpacer />
    
    <p>
      <PolarisButton>Polaris Button</PolarisButton>
    </p>
  
    <p>
      <Button variant="contained" color="primary">Material UI Button</Button>
    </p>
  </React.Fragment>
 )
}


////// Component Styles //////

const BottomMarginSpacer = styled(ToolBar)`
  margin-bottom: 50px;
`;
