import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";

import Typography from "@material-ui/core/Typography";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";

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


  ////// Render //////
  if (tradeInPrice) {
    return (
    <FormContainer>
      {/*
       Add info
       quantity box
       view cart
      */}
      <Typography>Trade in yours for ${tradeInPrice}</Typography>


      <InlineContainer>
        <ThinTextField
          value={quantity}
          onChange={e => setQuantity(e.target.value)}
        />
        <ButtonContainer>
          <Button size="small">Add to Trade Ins</Button>
          <Button size="small">View</Button>
        </ButtonContainer>
      </InlineContainer>

    </FormContainer>
  )}

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
  display: inline;
  width: 30px;
  margin-right: 10px !important;
  text-align: center !important;
`;

const ButtonContainer = styled.div`

  > * {
    margin-right: 10px !important;
    border: 2px dashed orange !important;
  }
`;


////// DOM Injection of this App/Widget //////

const injectionDiv = document.getElementById("productFlowInjection");
ReactDOM.render(<ProductFlowContainer />, injectionDiv);

