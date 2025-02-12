import React from 'react';
import { Typography, Button } from '@mui/material';

const ShoppingCart = () => {
    return (
        <div>
            <Typography variant="h4">Shopping Cart</Typography>
            <Typography variant="body1">Your selected products will be displayed here.</Typography>
            <Button variant="contained" color="primary">Checkout</Button>
        </div>
    );
};

export default ShoppingCart;
