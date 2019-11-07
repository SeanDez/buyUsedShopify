import React, {useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

import ProductReviewTable from "./shared/ProductReviewTable";
import {fontWeight} from "@material-ui/system";

////// Component Functions //////


////// Component //////
export default props => {
  const {renderReviewTable} = props;
  const {} = defineJss();
  
 ////// Component State //////
  const [shippingInstructions, setShippingInstructions] = useState<string>("Please print this page and include it in your shipment. Once we receive your package, all items will be reviewed to ensure they are in sellable condition. If any clarifications need to be made, we will contact you by the methods you provided. Your order will then be paid to the payout method and account you requested.");
 const [shopAddress, setShopAddress] = useState<{
   businessName: string, address1: string, address2: string, city: string, state: string, zipCode: string, country: string
 }>({
   businessName: 'Business Name'
   , address1: '123 Main Street'
   , address2: "Unit 2A"
   , city: 'Cleveland'
   , state: 'OH'
   , zipCode: '83727'
   , country: ''
 });
 
 const [payoutDetails, setPayoutDetails] = useState<{
   payoutMethod: string, payoutAccount: string
 }>({
   payoutMethod : "Check By Mail"
   , payoutAccount : "382 Howard Drive, Oakland CA 98284, United States"
 });
 
 const [contactInfo, setContactInfo] = useState<{
   fullName : string, email : string, phone : string
 }>({
   fullName : 'Stephan Miller'
   , email : "stephan_miller_2075@longemaildomain.com"
   , phone : "(827) 382-9382"
 });
 
 ////// Render //////
  return (
    <OuterContainer>
      {/* id. repeat of details. shipping instructions */}
      
      <section id="headlineArea">
        <Typography
          variant="h5"
          style={{textAlign: "center"}}
        >Your Trade In Order Number Is: <span style={{fontWeight: 600}}>103838</span>
        </Typography>
      </section>
      
      <TwoColumnSection>
        <div id="ShipToContainer">
          <Typography variant="h6">Ship Your Trade Ins Here:</Typography>
          <ShippingAddressOuter>
            <ShippingAddressInner>
            <Typography>{shopAddress.businessName}</Typography>
            <Typography>{shopAddress.address1}</Typography>
            <Typography>{shopAddress.address2}</Typography>
            <Typography>{shopAddress.city}, {shopAddress.state} {shopAddress.zipCode}</Typography>
            {shopAddress.country && <Typography>{shopAddress.country}</Typography>}
            </ShippingAddressInner>
          </ShippingAddressOuter>
        </div>
        
        <OtherDetailsContainer className="details">
          <Typography variant="h6">Payout Information</Typography>
          <Typography>Pay to: {contactInfo.fullName}</Typography>
          <Typography>{contactInfo.email}</Typography>
          <Typography>{contactInfo.phone}</Typography>
          <Typography>By: {payoutDetails.payoutMethod}: {payoutDetails.payoutAccount}</Typography>
        </OtherDetailsContainer>
      </TwoColumnSection>
      
      <section id="Instructions">
        <Typography variant="h6">Instructions</Typography>
        <Typography
          id="ShippingInstructions"
          variant="body2"
        >{shippingInstructions}</Typography>
      </section>
      
      <section id="ExpectedItemsTable">
        <Typography variant="h6">Expected Item(s)</Typography>
        <ProductReviewTable
          tradeInData={props.products}
          showDeleteIcon={false}
        />
      </section>
    </OuterContainer>
  );
}


////// Component Styles //////
const defineJss = makeStyles(theme => ({

}));

const OuterContainer = styled.div`
  padding: 0 2vw;
  
  > section {
    margin-top: 30px;
  }
`;

const TwoColumnSection = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 1rem;
`;

const ShippingAddressInner = styled.div`
  display: inline-block;
  border: 1px solid rgba(0, 0, 0, .3);
  border-radius: 5px;
  padding: 10px 60px 10px 10px;
`;

const ShippingAddressOuter = styled.div`
  width: 100%;
`;

const OtherDetailsContainer = styled.div`

`;
