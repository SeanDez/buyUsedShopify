import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";

import Typography from "@material-ui/core/Typography";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";

const ProductFlowContainer = props => {
  ////// Component State //////
  const [tradeInPrice, setTradeInPrice] = useState<number|undefined>(undefined);
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => setTradeInPrice(12.99),[tradeInPrice]);


  if (tradeInPrice) {
    return (
    <form>
      {/*
       Add info
       quantity box
       view cart
      */}
      <Typography>Trade in yours for ${tradeInPrice}</Typography>


      <InlineContainer>
        <ThinInput
          value={quantity}
        />
        <div id="tradeInFormButtons">
          <Button size="small">Add to Trade Ins</Button>
          <Button size="small">View</Button>
        </div>
      </InlineContainer>
    </form>
  )}

  return (
    <div>
      <h3>Loading</h3>
    </div>
  )
};


const InlineContainer = styled.div`
  display: flex;
  
  &>* {
    margin-right: "40px";
  }
`;

const ThinInput = styled(Input)`
  display: inline;
  width: 40px;
  text-align: center;
`;


////// DOM Injection of this App/Widget //////

const injectionDiv = document.getElementById("productFlowInjection");
ReactDOM.render(<ProductFlowContainer />, injectionDiv);

