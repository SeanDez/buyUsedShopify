import React from 'react';
import ReactDOM from 'react-dom';

const RegistrationFlowContainer = props => {

  return (
    <div>
      <h3>Compiled Successfully from registrationflow/index.tsx</h3>
      <p>new element</p>
    </div>
  )
};


const injectionDiv = document.getElementById("productFlowInjection");
ReactDOM.render(<RegistrationFlowContainer />, injectionDiv);

