import React from 'react';
import { Typography, TextField, Button } from '@mui/material';

const Checkout = () => {
    return (
        <div>
            <Typography variant="h4">Checkout</Typography>
            <TextField label="Address" fullWidth margin="normal" />
            <TextField label="Payment Method" fullWidth margin="normal" />
            <Button variant="contained" color="primary">Place Order</Button>
        </div>
    );
};

export default Checkout;
