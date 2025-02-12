const express = require('express');
const router = express.Router();

// Get all products
router.get('/', (req, res) => {
    // Logic to get all products
    res.send('List of products');
});

// Add a new product
router.post('/', (req, res) => {
    // Logic to add a new product
    res.send('Product added');
});

// Update a product
router.put('/:id', (req, res) => {
    // Logic to update a product
    res.send('Product updated');
});

// Delete a product
router.delete('/:id', (req, res) => {
    // Logic to delete a product
    res.send('Product deleted');
});

module.exports = router;
