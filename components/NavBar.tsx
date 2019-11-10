import React, {useState, useCallback} from 'react';
import styled from "styled-components";

import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

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
 const {} = props;
 
 ////// Component State //////
  const [activeTabKey, setActiveTabKey] = useState<string>('rules');

 ////// Render //////
 return (
  <React.Fragment>

    
    <AppBar>
      <Toolbar>
        <Typography variant="h4">Admin</Typography>
      </Toolbar>
    </AppBar>
    
    <Toolbar />
  
    <Button
      color="primary"
      variant="outlined"
      size="large"
    >Test Button</Button>
    
  </React.Fragment>
 )
}


////// Component Styles //////


