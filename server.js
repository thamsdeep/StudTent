const express = require('express');
const { errorHandler } = require('server\errorHandler.js');

const app = express();
app.use(express.json());

// Routes here...

// Error handling middleware
app.use(errorHandler);

app.listen(5000, () => console.log('Server running on port 5000'));
