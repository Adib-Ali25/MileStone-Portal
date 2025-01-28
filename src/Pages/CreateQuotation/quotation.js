import React from 'react';
import { TextField, Button, Checkbox, FormControlLabel, Container, Grid2 } from '@mui/material';
import './quotation.css';

const CreateQuotation = () => {
  return (
    <Container maxWidth="md" className="create-quotation">
      <form>
        {/* Header Section */}
        <Grid2 container spacing={2} className="header-section ">
          <Grid2 item xs={12} sm={6}>
            <TextField label="Quotation Number" variant="outlined" fullWidth />
          </Grid2>
          <Grid2 item xs={12} sm={6}>
            <TextField label="Name" variant="outlined" fullWidth />
          </Grid2>
          <Grid2 item xs={12} sm={6}>
            <TextField label="Date" type="date" InputLabelProps={{ shrink: true }} fullWidth />
          </Grid2>
          <Grid2 item xs={12}>
            <TextField label="Subject" variant="outlined" fullWidth />
          </Grid2>
        </Grid2>

        {/* Product Description Section */}
        <div className="section-divider">Product Description</div>
        <Grid2 container spacing={2}>
          <Grid2 item xs={12} sm={4}>
            <TextField label="Description" variant="outlined" fullWidth />
          </Grid2>
          <Grid2 item xs={6} sm={2}>
            <TextField label="Quantity" type="number" variant="outlined" fullWidth />
          </Grid2>
          <Grid2 item xs={6} sm={2}>
            <TextField label="Unit" type="text" variant="outlined" fullWidth />
          </Grid2>
          <Grid2 item xs={6} sm={2}>
            <TextField label="Price" type="number" variant="outlined" fullWidth />
          </Grid2>
          <Grid2 item xs={6} sm={2}>
            <TextField label="Amount" type="number" variant="outlined" fullWidth />
          </Grid2>
          <Grid2 item xs={12} sm={2}>
            <Button variant="outlined" color="success">Add More</Button>
            <Button variant="contained" color="primary" className="next-button">Next</Button>
          </Grid2>
        </Grid2>

        {/* Amount Section */}
        <div className="section-divider">Amount</div>
        <Grid2 container spacing={2}>
          <Grid2 item xs={12} sm={6}>
            <TextField label="Total" type="number" variant="outlined" fullWidth />
          </Grid2>
          <Grid2 item xs={6} sm={2}>
            <TextField label="CGST (%)" type="number" variant="outlined" fullWidth />
          </Grid2>
          <Grid2 item xs={6} sm={2}>
            <TextField label="SGST (%)" type="number" variant="outlined" fullWidth />
          </Grid2>
          <Grid2 item xs={6} sm={2}>
            <FormControlLabel control={<Checkbox />} label="Other" />
            <TextField label="Percentage" type="number" variant="outlined" fullWidth />
          </Grid2>
        </Grid2>

        {/* Grand Total Section */}
        <div className="section-divider">Grand Total</div>
        <Grid2 container spacing={2}>
          <Grid2 item xs={12}>
            <TextField label="Grand Total" type="number" variant="outlined" fullWidth />
          </Grid2>
          <Grid2 item xs={12}>
            <Button variant="contained" color="success">Done</Button>
            <Button variant="outlined" color="secondary">Download PDF</Button>
          </Grid2>
        </Grid2>
      </form>
    </Container>
  );
};

export default CreateQuotation;
