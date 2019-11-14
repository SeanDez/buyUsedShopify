import React, {useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import styled from "styled-components";


////// Component Functions //////


////// Component //////
export default props => {
 const {} = props;
 
 ////// Component State //////
  const [isExpanded, setIsExpanded] = useState<boolean>(true);
  const [useGlobalPercent, setUseGlobalPercent] = useState<boolean>(true);
 const [globalPercent, setGlobalPercent] = useState<string>("");
 
 const parentStyles = {
   "*" : {color : 'orange'}
 };
 
 ////// Render //////
  return (
    <div>
      <section className="card">
        <h3>Trade In Price Rules</h3>
        
        <p>Set the trade in offer price you want to show on this page. Also set excluded products
                                  you don't want to offer to buy back.</p>
        
        <p>1. You can currently set a global default price as a percentage of your sales price
                                   for the same item. This rule is the lowest priority and only applied when there are
                                   no higher priority rules on the same product.</p>
        
        <p className="instructionText">2. You can also set a global minimum quantity rule that only applies when your
                                       stock is below the quantity threshold. Usually merchants who use this rule will
                                       offer a higher percentage for trade ins. This rule overrides a global default
                                       price when it applies. </p>
        
        <p className="instructionText">3. Finally, you can set individual product price points. These will override both
                                       of the other rules.</p>
      </section>
      
      <section>
        <h4>Default Global Percent</h4>
        
        <input type="checkbox" name="useGlobalPercent" />
        <label htmlFor="useGlobalPercent">Use a global default percent for all products (excluded products will be
                                          ignored)"</label>
        
        {useGlobalPercent && (<div className="inputRow">
          <label htmlFor="globalPercent">Enter a percent of list price</label>
          <input
            type="number"
            value={globalPercent}
            name="globalPercent"
          /></div>)}
      </section>
      
      <section>
        <h4>Low Quantity Percent</h4>
        
        <div className="inputRow">
          <label htmlFor="lowQuantityThreshold">
            Enter a stock amount at which this rule will activate an override percentage for any product not marked as
            an
            exclusion (or leave blank to disable this rule)
          </label>
          <input type="number" />
        </div>
        
        <div className="inputRow">
          <label htmlFor="minQuantityPercentage">
            Min. quantity percent to offer
          </label>
          <input type="number" />
        </div>
      
      </section>
      
      <section>
        <h4>Individual Product Rules</h4>
        <p>Set a specific trade in price point and product ID here. Individual product rules override all global
           rules.</p>
        
        <div className="formEmulationGrid">
          <div className="inputRow">
            <label htmlFor="individualProductId">ProductId</label>
            <input type="text" name="individualProductId" />
          </div>
          
          <div className="inputRow">
            <label htmlFor="tradeInPrice">Trade In Price</label>
            <input type="number" />
          </div>
          
          <button>Add product rule</button>
        </div>
      </section>
      
      <section>
        <h4>Current Product Price Rules</h4>
        
        <table>
          <thead>
          <tr>
            <th>Product</th>
            <th>Trade In Price</th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>
              <span>Gummy Bears </span>
              <span>(283748)</span>
            </td>
            <td>29.99</td>
            <td>deleteIcon</td>
          </tr>
          </tbody>
        </table>
      </section>
      
      <section>
        <h4>Exclusions</h4>
        
        <p>Any products you list here will not show any trade in offers on its product page. When combined with global
           and individual product rules you have tight control over all the trade in options on your site for every
           product.</p>
        
        <div className="inputRow">
          <label htmlFor="exlusionProductId">Product Id</label>
          <input type="text" name="productId" />
          <button>Add excluded product</button>
        </div>
      
      </section>
      
      <section>
        <h4>Current Exclusions</h4>
        
        <table>
          <thead>
          <tr>
            <th>Product</th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>
              <span>Dinosaur </span>
              <span>(6234)</span>
            </td>
            <td>deleteIcon</td>
          </tr>
          </tbody>
        </table>
      </section>
      
      {/* language=CSS */}
      <style jsx>{`
      
      `}</style>
    </div>
  );
}


////// Component Styles //////

