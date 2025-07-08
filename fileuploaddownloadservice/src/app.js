const express = require('express');
const fileRoutes = require('./routes/fileRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for parsing application/json
app.use(express.json());

// Middleware for handling file uploads
app.use(express.urlencoded({ extended: true }));

// Set up routes
app.use('/api/files', fileRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});