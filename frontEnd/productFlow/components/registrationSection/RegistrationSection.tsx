import React, {useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import styled from "styled-components";
import {Typography} from "@material-ui/core";

import ProductReviewTable from "../shared/ProductReviewTable";
import PayoutForm from "./PayoutForm";


////// Component Functions //////


////// Component //////
export default props => {
  const {renderReviewTable} = props;
  const jss = defineJssStyles();
  
 ////// Component State //////
 
 ////// Render //////
 return (
  <div>
    <Typography variant='h5' style={{marginTop : '60px'}}>Submit a Buy Back Order</Typography>
    <Typography variant='body1'>Review your trade in items below. When you're ready to submit a trade in order, you can fill out your payout details and receive shipping instructions on the next page.</Typography>
    
  {/* Review Table */}
  <MainAreaContainer>
    <ReviewArea>
      <Typography variant='h6'>Review</Typography>
      <ProductReviewTable
        tradeInData={props.products}
        showDeleteIcon={true}
      />
    </ReviewArea>
  
    <PayoutForm />
    
  </MainAreaContainer>

  </div>
 )
}


////// Component Styles //////
const defineJssStyles = makeStyles(theme => ({

}));


const MainAreaContainer = styled.div`
  display: grid;
  grid-gap: .5rem;
  // repeat a target with value(s) (autofit, minmax it each time)
  grid-template-columns: minmax(250px, 1fr) minmax(400px, 1fr);
  align-items: start;
  justify-content: space-around;
  
  > * {
    // border: 2px dashed gold;
    margin: 15px 5px;
  }
`;


const ReviewArea = styled.div`
  flex-grow: 2;
  max-width: 500px;
  border: 1px solid rgba(200, 200, 200, .2);
  padding: 10px;

  * {
    text-align: center;
  }
`;






