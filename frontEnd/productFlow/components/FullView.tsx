import React, {ReactComponentElement, useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import styled from "styled-components";

import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";

import CloseIcon from "@material-ui/icons/Close";

import RegistrationSection from "./RegistrationSection";
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
  const {appBarContainer} = defineJss();
  
  ////// Component State //////
  const [view, setView] = useState('registration');
  
  
  /** Binds a JSX element to a variable
   * Props and DOM reference are made available and passed in/attached
   *
   * todo if I use this, it causes the screen to stay unclickable
   */
  const SlideUp: any = React.forwardRef((props, ref) => {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  
  ////// Render //////
  return (
    <Dialog
      fullScreen
      open={fullViewIsOpen}
      onClose={() => setFullViewIsOpen(false)}
      // TransitionComponent={SlideUp}
    >
       <AppBar className={appBarContainer}>
         <Typography
           variant='h6'
         >{setNavTitle(view)}</Typography>
         <CloseIcon
           onClick={() => setFullViewIsOpen(false)}
           style={{ cursor : 'pointer' }}
         />
       </AppBar>
      
      <Typography variant="h6">Placeholder</Typography>

      {view === 'registration' &&
      <RegistrationSection
        products={dummyData}
      />}
      
      {view === 'confirmation' &&
      <ConfirmationSection
      
      />}
    </Dialog>
  )
}


////// Component Styles //////
const defineJss = makeStyles(theme => ({
  appBarContainer : {
    padding : '10px 20px'
    , display : 'flex'
    , flexFlow : 'row nowrap'
    , justifyContent : 'space-between'
    , marginBottom : '30px'
    , '& > *' : {
      border : "2px dashed orange"
    }
  }
}));



