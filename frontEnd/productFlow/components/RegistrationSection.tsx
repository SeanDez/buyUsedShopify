import React, {useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import styled from "styled-components";
import {Typography} from "@material-ui/core";
import {JSXElement} from "@babel/types";

import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormLabel from "@material-ui/core/FormLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";


////// Component Functions //////
const renderReviewTable = (tradeInData: {
    productId: string
    , productName: string
    , quantity: number
    , price: number
  }[], jss) => {
  
  // create the table
  // foreach on the <tr> and below
  const TableRows = tradeInData.map(dataRow => {
    return (
      <TableRow key={dataRow.productId}>
        <StyledTableCell className={jss.narrowTableCell}>
          <p>{dataRow.productName} ({dataRow.quantity})</p>
          <SecondaryText>Id: {dataRow.productId}</SecondaryText>
        </StyledTableCell>
        <StyledTableCell style={{ textAlign : 'center'}}>{dataRow.price}</StyledTableCell>
      </TableRow>
    );
  });
  
  return (
    <ReviewTable>
      <TableBody>
        {TableRows}
      </TableBody>
    </ReviewTable>
  );
};


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
  const jss = defineJssStyles();
  
 ////// Component State //////
  const [payoutMethod, setPayoutMethod] = useState<string>('paypal');
  const [accountIdentifier, setAccountIdentifier] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [contactEmail, setContactEmail] = useState<string>("");
  const [contactPhone, setContactPhone] = useState<string>("");
  
  
 ////// Render //////
 return (
  <React.Fragment>
    {/*
      title / description
      product table   1) Review products
      checkout
        payOUT method 2) choose payout method
        contact email
        
        final information (on next page you'll get confirmation...
    */}
    
    <Typography variant='h5'>Submit a Buy Back Order</Typography>
    <Typography variant='body1'>Review your trade in items below. When you're ready to submit a trade in order, you can fill out your payout details and receive shipping instructions on the next page.</Typography>
    
  {/* Review Table */}
  <MainAreaContainer>
    <ReviewArea>
      <Typography variant='h6'>Review</Typography>
      {renderReviewTable(props.products, jss)}
    </ReviewArea>
  
    {/* PayOUT form */}
    <StyledForm id="informationArea">
      <FormControl>
        <FormLabel>Payout Method</FormLabel>
        <StyledRadioGroup row
          onChange={e => setPayoutMethod(e.target.value)}
          style={{ marginTop : '10px' }}
        >
          {renderPayoutRadios()}
        </StyledRadioGroup>
      </FormControl>
      
    {/* Dynamic account identifier */}
    
      <Input
        placeholder={renderAccountIdLabel(payoutMethod)}
        value={accountIdentifier}
        onChange={e => setAccountIdentifier(e.target.value)}
        style={{ width : '400px', marginTop : '13px' }}
      />
      
      
      <Typography
        variant="body1"
        style={{ marginTop : '23px' }}
      >Contact Information</Typography>
      <Typography>In case there's an issue with your trade in</Typography>
      
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
        style={{ marginTop : '15px' }}
        variant="contained"
      >Submit Trade In Order</Button>
      
    </StyledForm>
  </MainAreaContainer>

  </React.Fragment>
 )
}


////// Component Styles //////
const defineJssStyles = makeStyles(theme => ({
  narrowTableCell : {
    width : "100px !important"
    // , border : "2px dashed lightblue"
  }
}));

const ReviewTable = styled(Table)`
  min-width: 200px;
  max-width: 300px;
  
  * {
    text-align: center;
  }
`;

const ReviewArea = styled.div`
  max-width: 300px;
`;

const StyledTableCell = styled(TableCell)`
  width: 50px;
  border: 1px solid rgba(200, 200, 200, .1);
  border-radius: 4px;
  text-align: center;
  padding: 0 !important;
  margin: 0 !important;
`;


const SecondaryText = styled.p`
  font-style: italic;
  font-size: .9rem;
  margin-top: -7px;
`;


const MainAreaContainer = styled.div`
  display: grid;
  grid-auto-flow: row;
  align-items: center;
  justify-items: center;
  
  > * {
    border: 2px dashed gold;
    margin: 15px 20px;
  }
`;

const StyledRadioGroup = styled(RadioGroup)`
  max-width: 600px;
  
  > * {
    margin-left: 5px !important;
    border: 2px dashed violet;
  }
`;

const StyledForm = styled.form`
  max-width: 600px;
`;




