import React from 'react';
import './SalesTable.css';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Pagination, Checkbox } from '@mui/material';


const data = [
  { productName: 'Shingles', orderCode: '#0001', category: 'Roof', quantity: 1, totalPrice: 69 },
  { productName: 'Rubber Tiles', orderCode: '#0002', category: 'Tiles', quantity: 2, totalPrice: 69 },
  { productName: 'ACP', orderCode: '#0003', category: 'Panels', quantity: 2, totalPrice: 69 },
  { productName: 'PUF', orderCode: '#0004', category: 'Panels', quantity: 1, totalPrice: 69 },
  { productName: 'Blocks', orderCode: '#0005', category: 'Tiles', quantity: 1, totalPrice: 69 },
];

const SalesTable = () => {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
            <tableCell><Checkbox/></tableCell>
              <TableCell>Product Name</TableCell>
              <TableCell>Order Code</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Total Price</TableCell>
              <TableCell>Last 7 Days</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index}>
                {/* <tableCell>{row.Checkbox}</tableCell>  */}
                <tableCell><Checkbox/></tableCell>
                <TableCell>{row.productName}</TableCell>
                <TableCell>{row.orderCode}</TableCell>
                <TableCell>{row.category}</TableCell>
                <TableCell>{row.quantity}</TableCell>
                <TableCell>{`₹ ${row.totalPrice.toLocaleString()}`}</TableCell>
                <TableCell>
                  <div id="button"><a href="/">View Invoice</a></div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {/* <Pagination count={5} /> */}
<Pagination count={5} variant="outlined" shape="rounded" className='Pagination'/>

      </TableContainer>
    </div>
  );
};

export default SalesTable;
