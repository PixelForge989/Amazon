import React from 'react';
import { Typography, TextField, Button } from '@mui/material';

const LoginRegister = () => {
    return (
        <div>
            <Typography variant="h4">Login / Register</Typography>
            <TextField label="Email" fullWidth margin="normal" />
            <TextField label="Password" type="password" fullWidth margin="normal" />
            <Button variant="contained" color="primary">Login</Button>
            <Button variant="contained" color="secondary">Register</Button>
        </div>
    );
};

export default LoginRegister;
