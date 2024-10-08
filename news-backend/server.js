// server.js
const express = require('express'); // Import Express
const axios = require('axios'); // Import Axios
const cors = require('cors'); // Import CORS
const dotenv = require('dotenv'); // Import dotenv to use environment variables

// Load environment variables from .env file
dotenv.config();

const app = express(); // Create an Express application
const PORT = process.env.PORT || 5000; // Define the port

// Enable CORS for all origins
app.use(cors());

// Define the route for fetching news
app.get('/api/news', async (req, res) => {
  const query = req.query.query || 'Tesla'; // Default search query
  const API_KEY = process.env.VITE_API_KEY; // Your API key from environment variables

  try {
    // Make a request to the news API
    const response = await axios.get(`https://newsapi.org/v2/everything`, {
      params: {
        q: query,
        apiKey: API_KEY,
      },
    });
    res.status(200).json(response.data); // Send back the response data
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch news articles.' }); // Handle errors
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`); // Log to the console
});
