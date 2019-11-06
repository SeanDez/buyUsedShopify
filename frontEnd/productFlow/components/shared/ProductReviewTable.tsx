import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import styled from "styled-components";
import TableRow from "@material-ui/core/TableRow";
import DeleteOutline from "@material-ui/icons/DeleteOutline"
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";


////// Component Functions //////

////// Component //////
export default props => {
  const {tradeInData, showDeleteIcon} = props;
  const jss = defineJss();
  
 ////// Component State //////
 
 ////// Render //////
 return (
   <Table>
     <TableBody>
       {tradeInData.map(dataRow => {
         return (
           <TableRow key={dataRow.productId}>
             <StyledTableCell className={jss.narrowTableCell}>
               <ProductNameDiv>
                 <p>{dataRow.productName} ({dataRow.quantity})</p>
                 {showDeleteIcon && <DeleteOutline
                   style={{ cursor : "pointer" }}
                 />}
               </ProductNameDiv>
               <SecondaryText>Id: {dataRow.productId}</SecondaryText>
             </StyledTableCell>
             <StyledTableCell style={{ textAlign : 'center'}}>{dataRow.price}</StyledTableCell>
           </TableRow>
         )}
       )}
     </TableBody>
   </Table>
 )
}


////// Component Styles //////
const defineJss = makeStyles(theme => ({
  narrowTableCell : {
    width : "100px !important"
   }
}));


const StyledTableCell = styled(TableCell)`
  width: 50px;
  border: 1px solid rgba(200, 200, 200, .1);
  border-radius: 4px;
  text-align: center;
  padding: 0 !important;
  margin: 0 !important;
`;


const ProductNameDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;


const SecondaryText = styled.p`
  font-style: italic;
  font-size: .9rem;
  margin-top: -7px;
`;
