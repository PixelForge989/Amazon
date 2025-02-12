import React from 'react';
import { Typography, Button } from '@mui/material';

const Wishlist = () => {
    return (
        <div>
            <Typography variant="h4">Wishlist</Typography>
            <Typography variant="body1">Your wishlist items will be displayed here.</Typography>
            <Button variant="contained" color="primary">Add to Cart</Button>
        </div>
    );
};

export default Wishlist;
