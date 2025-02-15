const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Order = require('./models/Order');

const app = express();

// Simple CORS configuration
app.use(cors());  // সব origin থেকে request allow করবে

// Middleware
app.use(express.json());

// Orders API endpoint
app.post('/api/orders', async (req, res) => {
    try {
        console.log('Received order:', req.body);
        const newOrder = new Order(req.body);
        const savedOrder = await newOrder.save();
        res.status(201).json({ 
            success: true, 
            order: savedOrder 
        });
    } catch (error) {
        console.error('Order error:', error);
        res.status(400).json({ 
            success: false, 
            message: error.message 
        });
    }
});

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/fishMedicineStore', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error('MongoDB Connection Error:', err));

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// ... existing code ...

// Get all orders
app.get('/api/orders', async (req, res) => {
    try {
        const orders = await Order.find().sort({ orderDate: -1 });
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Delete order
app.delete('/api/orders/:id', async (req, res) => {
    try {
        await Order.findByIdAndDelete(req.params.id);
        res.json({ message: 'Order deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// ... existing code ...