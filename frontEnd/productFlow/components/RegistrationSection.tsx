import React, {useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import styled from "styled-components";
import {Typography} from "@material-ui/core";

import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import ProductReviewTable from "./shared/ProductReviewTable";

////// Component Functions //////

const renderPayoutRadios = () => {
  const radioOptions = [
    {value: 'paypal', label: 'Paypal'}
    , {value: 'postalCheck', label: 'Check By Mail'}
    , {value: 'googleWallet', label: 'Google Wallet'}
    , {value: 'amazonPayments', label: 'Amazon Payments'}
    , {value: 'alipay', label: 'Alipay'}
    , {value: 'payoneer', label: 'Payoneer'}
  ];
  
  const radioJsx = radioOptions.map(({value, label}) => {
  
    return (
      <FormControlLabel
        value={value}
        labelPlacement="end"
        label={label}
        control={<Radio />}
        key={value}
    />
    )
  });
  
  return radioJsx
};


const renderAccountIdLabel = (payoutMethodState: string) => {
  
  if (payoutMethodState === 'postalCheck') {
    return "Street Address, City, State, and Zip Code";
  } else if (payoutMethodState === 'paypal') {
    return "Your Paypal Account Email";
  } else {
    return "Your Account Id";
  }
};




////// Component //////
export default props => {
  const {renderReviewTable} = props;
  const jss = defineJssStyles();
  
 ////// Component State //////
  const [payoutMethod, setPayoutMethod] = useState<string>('paypal');
  const [accountIdentifier, setAccountIdentifier] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [contactEmail, setContactEmail] = useState<string>("");
  const [contactPhone, setContactPhone] = useState<string>("");
  
  
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
  
    {/* PayOUT form */}
    <StyledForm>
      <Typography
        variant='h6'
        style={{ textAlign : 'center' }}
      >Payout & Contact Details</Typography>
      <FormControl>
        <Typography
          variant='body1'
          style={{ marginTop : '15px' }}
        >Payout Method</Typography>
        <StyledRadioGroup row
          onChange={e => setPayoutMethod(e.target.value)}
          style={{ marginTop : '10px' }}
        >
          {renderPayoutRadios()}
        </StyledRadioGroup>
      </FormControl>
      
      <Input
        placeholder={renderAccountIdLabel(payoutMethod)}
        value={accountIdentifier}
        onChange={e => setAccountIdentifier(e.target.value)}
        style={{ width: "100%", maxWidth : '400px', marginTop : '13px' }}
      />
  
      <Typography
        variant="body1"
        style={{ marginTop : '23px' }}
      >Contact Information</Typography>
      <Typography variant="caption">In case an issue arises, we'll contact you by phone or email.</Typography>
      
      <div id="contactFields">
        <Input
          placeholder="Full Name"
          value={fullName}
          onChange={e => setFullName(e.target.value)}
        />
        <Input
          placeholder="Contact Email"
          value={contactEmail}
          onChange={e => setContactEmail(e.target.value)}
        />
        <Input
          placeholder="Contact Phone"
          value={contactPhone}
          onChange={e => setContactPhone(e.target.value)}
        />
      </div>
      
      <Button
        style={{ marginTop : '25px' }}
        variant="contained"
      >Submit Trade In Order</Button>
      
    </StyledForm>
  </MainAreaContainer>

  </div>
 )
}


////// Component Styles //////
const defineJssStyles = makeStyles(theme => ({

}));


const ReviewArea = styled.div`
  flex-grow: 2;
  max-width: 500px;
  border: 1px solid rgba(200, 200, 200, .2);
  padding: 10px;

  * {
    text-align: center;
  }
`;


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

const StyledRadioGroup = styled(RadioGroup)`
  max-width: 600px;
  
  > * {
    margin-left: 5px !important;
    // border: 2px dashed violet;
  }
`;

const StyledForm = styled.form`
  padding: 10px;
  flex-grow: 1;
  max-width: 600px;
  border: 1px solid rgba(200, 200, 200, .2);
  border-radius: 5px;
`;




