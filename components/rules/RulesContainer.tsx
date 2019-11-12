import React, {useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import styled from "styled-components";
import {Checkbox, TextField, Card, DisplayText, Heading} from "@shopify/polaris";
import "../../adminStyles.css";


////// Component Functions //////


////// Component //////
export default props => {
 const {} = props;
 
 ////// Component State //////
  const [isExpanded, setIsExpanded] = useState<boolean>(true);
  const [useGlobalPercent, setUseGlobalPercent] = useState<boolean>(true);
 const [globalPercent, setGlobalPercent] = useState<string>("");
 
 const parentStyles = {
   "*" : {color : 'orange'}
 };
 
 ////// Render //////
 return (
  <div>

      <section className="card">
        <h3>Trade In Price Rules</h3>
      
        <DisplayText size="small">Set the trade in offer price you want to show on this page. Also set excluded products you don't want to offer to buy back.</DisplayText>
      
        <DisplayText size="medium">1. You can currently set a global default price as a percentage of your sales price for the same item. This rule is the lowest priority and only applied when there are no higher priority rules on the same product.</DisplayText>
      
        <p className="instructionText">2. You can also set a global minimum quantity rule that only applies when your stock is below the quantity threshold. Usually merchants who use this rule will offer a higher percentage for trade ins. This rule overrides a global default price when it applies. </p>
      
        <p className="instructionText">3. Finally, you can set individual product price points. These will override both of the other rules.</p>
      </section>

    
    <Card>
      <form>
        {/*<Checkbox*/}
        {/*  label="Use a global default percent for all products (excluded products will be ignored)"*/}
        {/*/>*/}
        
        {useGlobalPercent && <TextField
          label="Enter a percent of sales price to use as your trade in buyback price"
          value={globalPercent}
          onChange={newPercent => setGlobalPercent(newPercent)}
        />}
      </form>
    </Card>
  </div>
 )
}


////// Component Styles //////

