import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";
import {Link, BrowserRouter} from 'react-router-dom';

import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";


import FullView from "./components/FullView";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

////// Component Functions //////




////// Component //////

const ProductFlowContainer = props => {
  ////// Component State //////

  // display settings
  const [fullViewIsOpen, setFullViewIsOpen] = useState<boolean>(false);
  
  
  
  // product price and quantity
  const [tradeInPrice, setTradeInPrice] = useState<number|undefined>(undefined);
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => setTradeInPrice(12.99),[tradeInPrice]);
  


  ////// Render //////
  if (tradeInPrice) {
    return (
      <BrowserRouter>
        <CssBaseline />
        <FormContainer>
          <Typography>
            Sell yours back to us for <SemiBoldSpan>${tradeInPrice}</SemiBoldSpan>
          </Typography>
        
          <InlineContainer>
            <ThinTextField
              value={quantity}
              onChange={e => setQuantity(e.target.value)}
            />
            <ButtonContainer>
              <Button
                size="small"
                onClick={() => setFullViewIsOpen(true)}
              >Add to Trade Ins</Button>
              <Button
                variant='text'
                onClick={() => setFullViewIsOpen(true)}
              >View</Button>
            </ButtonContainer>
          </InlineContainer>
        
          <FullView
            fullViewIsOpen={fullViewIsOpen}
            setFullViewIsOpen={setFullViewIsOpen}
          />
      
        </FormContainer>
      </BrowserRouter>
    );}
  
  return (
    <div>
      <h3>Loading</h3>
    </div>
  );
};



////// Component Styles //////

const FormContainer = styled.form`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  text-align: center;
  max-width: 300px;

  > * {
    margin-top: 10px;
  }
`;

const InlineContainer = styled.div`
  display: flex;
  
  > * { // direct children
    margin-right: 10px;
    //border: 2px dashed blueviolet;
  }
`;

const ThinTextField = styled(TextField)`
  width: 30px;
  margin-right: 10px !important;
  text-align: center !important;
`;

const ButtonContainer = styled.div`

  > * {
    margin-right: 10px !important;
    border: 2px dashed orange !important;
    text-decoration: none;
  }
`;

const PopoverContentContainer = styled.div`
  padding: 15px;
  background-color: transparent;
`;


const InnerPopoverContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  background-color: RGBa(192, 183, 205, .3);
  padding: 10px;
  border-radius: 5px;
  > * {
    margin: 15px;
    text-decoration: none;
    border: 2px dashed yellowgreen;
  }
`;

const SemiBoldSpan = styled.span`
  font-weight: 600 !important;
`;

const TopRightHighlightOffIcon = styled(HighlightOffIcon)`
  position: absolute;
  top: -20px;
  right: -10px;
  cursor: pointer;
`;

////// DOM Injection of this App/Widget //////

const injectionDiv = document.getElementById("productFlowInjection");
ReactDOM.render(<ProductFlowContainer />, injectionDiv);

