import React, {useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import styled from "styled-components";

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

////// Component Functions //////


////// Component //////
export default props => {
 const {} = props;
 
 ////// Component State //////
  const [useGlobalPercent, setUseGlobalPercent] = useState<boolean>(true);
 const [globalPercent, setGlobalPercent] = useState<string>("");
 const [lowQuantityThreshold, setLowQuantityThreshold] = useState<string>("");
 const [lowQuantityPercent, setLowQuantityPercent] = useState<string>("");
 
 
 
 ////// Render //////
  return (
    <div>
      <section className="card">
        <Typography variant='h5'>Trade In Price Rules
        </Typography>
        
        <Typography variant='body2'>Set the trade in offer price you want to show on this page. Also set excluded products
                                  you don't want to offer to buy back.
        </Typography>
        
        <Typography variant='body2'>1. You can currently set a global default price as a percentage of your sales price
                                   for the same item. This rule is the lowest priority and only applied when there are
                                   no higher priority rules on the same product.
        </Typography>
        
        <Typography variant='body2'>
          2. You can also set a global minimum quantity rule that only applies when your
                                       stock is below the quantity threshold. Usually merchants who use this rule will
                                       offer a higher percentage for trade ins. This rule overrides a global default
                                       price when it applies.
        </Typography>
        
        <Typography variant='body2'>
          3. Finally, you can set individual product price points. These will override both
                                       of the other rules.
        </Typography>
      </section>
      
      <section>
        <Typography variant='h6'>
          Default Global Percent
        </Typography>
        
        <input type="checkbox" name="useGlobalPercent" />
        
        <label htmlFor="useGlobalPercent">
          <Typography variant='body1'>Use a global default percent for all products (excluded products will be
                                          ignored)"
        </Typography>
        </label>
        
        {useGlobalPercent && (<div className="inputRow">
          <label htmlFor="globalPercent">
            <Typography variant='body1'>Enter a percent of list price
            </Typography>
          </label>
          <input
            type="number"
            value={globalPercent}
            name="globalPercent"
            onChange={e => setGlobalPercent(e.target.value)}
          />
        </div>)}
      </section>
      
      <section>
        <Typography variant='h6'>Low Quantity Percent</Typography>
        
        <div className="inputRow">
          <label htmlFor="lowQuantityThreshold">
            <Typography variant='body1'>
              Enter a stock amount at which this rule will activate an override percentage for any product not marked as
            an
            exclusion (or leave blank to disable this rule)
            </Typography>
          </label>
          <input
            type="number"
            value={lowQuantityThreshold}
            onChange={e => setLowQuantityThreshold(e.target.value)}
          />
        </div>
        
        <div className="inputRow">
          <label htmlFor="minQuantityPercentage">
            <Typography variant='body1'>
              Min. quantity percent to offer
            </Typography>
          </label>
          <input type="number" />
        </div>
      
      </section>
      
      <section>
        <Typography variant='h6'>Individual Product Rules</Typography>
        <Typography variant='body2'>
          Set a specific trade in price point and product ID here. Individual product rules override all global
           rules.
        </Typography>
        
        <div className="formEmulationGrid">
          <div className="inputRow">
            <label htmlFor="individualProductId">
              <Typography variant='body1'>
                ProductId
              </Typography>
            </label>
            <input type="text" name="individualProductId" />
          </div>
          
          <div className="inputRow">
            <label htmlFor="tradeInPrice">
              <Typography variant='body1'>
                Trade In Price
              </Typography>
            </label>
            <input type="number" />
          </div>
          
          <Button variant="contained">Add product rule</Button>
        </div>
      </section>
      
      <section>
        <Typography variant='h6'>Current Product Price Rules</Typography>
        <table>
          <thead>
          <tr>
            <th>
              <Typography variant="body1">
                Product
              </Typography>
            </th>
            <th>
              <Typography variant="body1">
                Trade In Price
              </Typography>
            </th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>
              <span>
                <Typography variant="body1">
                  Gummy Bears
                </Typography>
              </span>
              <span>
                <Typography variant="body1">
                  (283748)
                </Typography>
              </span>
            </td>
            <td>
              <Typography variant="body1">
                29.99
              </Typography>
            </td>
            <td>deleteIcon</td>
          </tr>
          </tbody>
        </table>
      </section>
      
      <section>
        <Typography variant='h6'>Exclusions</Typography>
        
        <Typography variant='body2'>
          Any products you list here will not show any trade in offers on its product page. When combined with global
           and individual product rules you have tight control over all the trade in options on your site for every
           product.
        </Typography>
        
        <div className="inputRow">
          <label htmlFor="exlusionProductId">Product Id</label>
          <input type="text" name="productId" />
          <Button variant="contained">Add excluded product</Button>
        </div>
      </section>
      
      <section>
        <Typography variant='h6'>Current Exclusions</Typography>
        <table>
          <thead>
          <tr>
            <th>
              <Typography variant="body1">
                Product
              </Typography>
            </th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>
              <span>
                <Typography variant="body1">Dinosaur </Typography>
              </span>
              <span>
                <Typography variant="body1">
                  (6234)</Typography>
              </span>
            </td>
            <td>deleteIcon</td>
          </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}


////// Component Styles //////

