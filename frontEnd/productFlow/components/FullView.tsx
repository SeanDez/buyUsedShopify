import React, {ReactComponentElement, useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import styled from "styled-components";

import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import CloseIcon from "@material-ui/icons/Close";

import RegistrationSection from "./registrationSection/RegistrationSection";
import ConfirmationSection from "./ConfirmationSection";


////// Dummy Data //////
const dummyData = [
  {productId: '249', productName: 'Longer Product Name - Longer Product Name', quantity: 1, price: 12.99}
  , {productId: '23349', productName: 'Product Name', quantity: 1, price: 12.99}
  , {productId: '23249', productName: 'Mid Product Name', quantity: 1, price: 12.99}
  , {productId: '22349', productName: 'xyz', quantity: 1, price: 12.99}
];


////// Component Functions //////

const SlideUp = React.forwardRef((props, ref) => {
  return (
    <Slide direction="up" ref={ref} {...props} />
    );
});

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const setNavTitle = (viewState: string) => {
  if (viewState === 'registration') {
    return "Complete Your Trade in Request"
  } else if (viewState === 'confirmation') {
    return "Confirmation"
  }
  return;
};

////// Component //////
export default props => {
  const {fullViewIsOpen, setFullViewIsOpen} = props;
  const {toolBarContainer} = defineJss();
  
  ////// Component State //////
  const [view, setView] = useState('registration');
  
  
  ////// Render //////
  return (
    <Dialog
      fullScreen
      open={true}
      onClose={() => setFullViewIsOpen(false)}
      // TransitionComponent={SlideUp}
      style={{overflow: 'auto'}}
    >
      <AppBar>
        <Toolbar className={toolBarContainer}>
          <Typography
            variant='h6'
          >{setNavTitle(view)}</Typography>
          <CloseIcon
            onClick={() => setFullViewIsOpen(false)}
            style={{cursor: 'pointer'}}
          />
        </Toolbar>
      </AppBar>
      <NavBarOffset />
      
      
      {view === 'registration' &&
      <RegistrationSection
       products={dummyData}
      />}
      
      {view === 'confirmation' &&
      <ConfirmationSection
       products={dummyData}
      />}
    </Dialog>
  );
}


////// Component Styles //////
const defineJss = makeStyles(theme => ({
  toolBarContainer : {
    display : 'flex'
    , flexFlow : 'row nowrap'
    , justifyContent : 'space-between'
    , '& > *' : {
      border : "2px dashed orange"
    }
  }
}));


const NavBarOffset = styled.div`
  margin-bottom: 80px;
`;
