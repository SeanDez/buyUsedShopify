import React, {useState, useCallback} from 'react';
import styled from "styled-components";

import {Button as PolarisButton} from "@shopify/polaris";

// import Typography from 'antd/es/typography';
import Card from 'antd/es/card';
// import Tabs from 'antd/es/tabs';
import {Tabs} from 'antd';

import 'antd/dist/antd.css';


const {TabPane} = Tabs;


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
  
    {/*<Tabs*/}
    {/*  hideAdd*/}
    {/*  onChange={this.onChange}*/}
    {/*  activeKey={this.state.activeKey}*/}
    {/*  type="editable-card"*/}
    {/*  onEdit={this.onEdit}*/}
    {/*>*/}
    {/*  {this.state.panes.map(pane => (*/}
    {/*    <TabPane tab={pane.title} key={pane.key}>*/}
    {/*      {pane.content}*/}
    {/*    </TabPane>*/}
    {/*  ))}*/}
    {/*</Tabs>*/}
    
    <Tabs
      activeKey={activeTabKey}
      onChange={newKey => {
        console.log(newKey, `=====newKey=====`);
        setActiveTabKey(newKey)
      }}
      // type="card"
    >
      <TabPane tab="Rules" key="1">Rules</TabPane>
      <TabPane tab="Open Requests" key="2">Open Requests Content</TabPane>
      <TabPane tab="Closed" key="3">Closed</TabPane>
    </Tabs>
    
  </React.Fragment>
 )
}


////// Component Styles //////


