import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";
import {Route, Link, BrowserRouter} from 'react-router-dom';

import Typography from "@material-ui/core/Typography";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Popover from "@material-ui/core/Popover";

import HighlightOffIcon from '@material-ui/icons/HighlightOff';

////// Component Functions //////

/** Fires a modal blindly. No control logic
 *
 * todo: write the presentation logic now. Figure out the control logic later (will go in a back end function that then updates a variable set monitor via useEffect
 */
const renderModal = () => {

};


////// Component //////

const ProductFlowContainer = props => {
  ////// Component State //////

  // display settings
  const [displaySuccessModal, setDisplaySuccessModal] = useState(true);


  // product price and quantity
  const [tradeInPrice, setTradeInPrice] = useState<number|undefined>(undefined);
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => setTradeInPrice(12.99),[tradeInPrice]);


  ////// Popover //////
  const [anchorElement, setAnchorElement] = useState<HTMLElement|null>(null);


  ////// Render //////
  if (tradeInPrice) {
    return (
      <BrowserRouter>
        <FormContainer>
          {/*
           Add info
           quantity box
           view cart
           */}


          <Typography>
            Sell this item back to us for <SemiBoldSpan>${tradeInPrice}</SemiBoldSpan>
          </Typography>


          <InlineContainer>
            <ThinTextField
              value={quantity}
              onChange={e => setQuantity(e.target.value)}
            />
            <ButtonContainer>
              <Button
                size="small"
                onClick={e => setAnchorElement(e.currentTarget)}
              >Add to Trade Ins</Button>

              <Link to="/registerTradeIns">
                <Button variant='text'>View</Button>
              </Link>
            </ButtonContainer>
          </InlineContainer>


          <Popover
            open={Boolean(anchorElement)}
            onClose={() => setAnchorElement(null)}
            anchorEl={anchorElement}
            anchorOrigin={{vertical: 'top', horizontal: 'center'}}
            transformOrigin={{vertical: 'top', horizontal: 'center'}}
          >
            <PopoverContentContainer>
              <Typography>Added to Trade Ins List</Typography>

              <Link to="/registerTradeIns">
                <Button variant='contained' color="primary">
                  View List
                </Button>
              </Link>

              <TopRightHighlightOffIcon
                onClick={() => setAnchorElement(null)}
              />
            </PopoverContentContainer>
          </Popover>

        </FormContainer>
      </BrowserRouter>
    );}

  return (
    <div>
      <h3>Loading</h3>
    </div>
  )
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
  padding: 20px 10px 10px 10px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  > * {
    margin: 10px !important;
    text-decoration: none;
  }
`;

const SemiBoldSpan = styled.span`
  font-weight: 500;
`;

const TopRightHighlightOffIcon = styled(HighlightOffIcon)`
  position: absolute;
  top: -10px;
  right: -10px;
  cursor: pointer;
`;

////// DOM Injection of this App/Widget //////

const injectionDiv = document.getElementById("productFlowInjection");
ReactDOM.render(<ProductFlowContainer />, injectionDiv);

