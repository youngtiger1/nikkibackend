const express = require('express');
const bodyParser = require('body-parser');
const runChat = require('./runChat'); // Assuming you save the previous code in a file named 'runChat.js'

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Endpoint to handle chat requests
app.post('/chat', async (req, res) => {
  try {
    const { prompt } = req.body;
    const response = await runChat(prompt);
    res.json({ response });
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
