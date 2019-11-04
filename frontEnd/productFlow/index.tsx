import React from 'react';
import ReactDOM from 'react-dom';

const ProductFlowContainer = props => {

  return (
    <div>
      <h3>Compiled Successfully from productflow/index.tsx</h3>
      <p>updated element</p>
    </div>
  )
};


const injectionDiv = document.getElementById("productFlowInjection");
ReactDOM.render(<ProductFlowContainer />, injectionDiv);

