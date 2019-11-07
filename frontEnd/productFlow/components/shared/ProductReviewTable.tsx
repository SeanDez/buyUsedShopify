import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import styled from "styled-components";
import TableRow from "@material-ui/core/TableRow";
import DeleteOutline from "@material-ui/icons/DeleteOutline"
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";


////// Component Functions //////
const renderTotalPrice = (prices: number[]) => {
  const sum = prices.reduce((prev, current) => prev + current);
  
  return sum;
};

////// Component //////
export default props => {
  const {tradeInData, showDeleteIcon} = props;
  
 ////// Component State //////
 
 ////// Render //////
 return (
   <ReviewTable>
     <tbody>
       {tradeInData.map(dataRow => {
         return (
           <FlexTableRow key={dataRow.productId}>
             <ProductInfoCell>
               <ProductNameDiv>
                 <p>{dataRow.productName} ({dataRow.quantity})</p>
                 {showDeleteIcon && <DeleteOutline
                   style={{ cursor : "pointer" }}
                 />}
               </ProductNameDiv>
               <SecondaryText>Id: {dataRow.productId}</SecondaryText>
             </ProductInfoCell>
             <ProductPriceCell>
               {dataRow.price}
             </ProductPriceCell>
           </FlexTableRow>
         )}
       )}
     {/* Total */}
       <FlexTableRow>
         <ProductInfoCell></ProductInfoCell>
         <ProductPriceCell>
           Total: {renderTotalPrice(tradeInData.map(productRecord => productRecord.price))}
         </ProductPriceCell>
       </FlexTableRow>
     </tbody>
   </ReviewTable>
 )
}


////// Component Styles //////

const ReviewTable = styled.table`
  max-width: 100vw;
`;

const FlexTableRow = styled.tr`
  border: 1px solid rgba(200, 200, 200, .6);
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;

const StyledTableCell = styled.td`
  border-radius: 4px;
  padding: 0 !important;
  margin: 0 !important;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

const ProductInfoCell = styled(StyledTableCell)`
  flex-grow: 3;
`;

const ProductPriceCell = styled(StyledTableCell)`
  flex-grow: 1;
  margin: 0 auto;
  padding: 5px 0 !important;
`;


const ProductNameDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
`;


const SecondaryText = styled.p`
  font-style: italic;
  font-size: .9rem;
  margin-top: -12px;
`;
