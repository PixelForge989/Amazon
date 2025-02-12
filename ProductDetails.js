import React from 'react';
import { Typography, Button } from '@mui/material';

const ProductDetails = () => {
    return (
        <div>
            <Typography variant="h4">Product Name</Typography>
            <Typography variant="h6">$49.99</Typography>
            <Typography variant="body1">Product description goes here.</Typography>
            <Button variant="contained" color="primary">Buy Now</Button>
            <Button variant="contained" color="secondary">Add to Cart</Button>
        </div>
    );
};

export default ProductDetails;
