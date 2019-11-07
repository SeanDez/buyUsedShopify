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
  <OuterContainer>
    
    <HeadingBox>
      <Typography variant='h5'>Submit a Buy Back Order</Typography>
      <Typography variant='body2'>Review your trade in items below. When you're ready to submit a trade in order, you can fill out your payout details and receive shipping instructions on the next page.</Typography>
    </HeadingBox>
  
    {/* Review Table */}
  <MainAreaContainer>
    <ReviewArea>
      <Typography variant='h6'>Trade In Items</Typography>
      <ProductReviewTable
        tradeInData={props.products}
        showDeleteIcon={true}
      />
    </ReviewArea>
  
    <PayoutForm />
    
  </MainAreaContainer>

  </OuterContainer>
 )
}


////// Component Styles //////
const defineJssStyles = makeStyles(theme => ({

}));

const OuterContainer = styled.div`
  padding: 0 2vw;
  
  > section {
    margin-top: 30px;
  }
`;

const HeadingBox = styled.section`
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

const MainAreaContainer = styled.section`
  display: grid;
  grid-gap: .5rem;
  // repeat a target with value(s) (autofit, minmax it each time)
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  align-items: start;
  justify-content: space-around;
  justify-items: center;
  
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






