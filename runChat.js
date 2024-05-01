const axios = require('axios');

const API_KEY = process.env.GEMINI_API_KEY; // Replace with your Gemini API key
const MODEL_NAME = 'your_model_name'; // Replace with your Gemini model name

async function runChat(prompt) {
  try {
    // Make a POST request to the Gemini API
    const response = await axios.post(
      'https://api.geminiapi.dev/generate',
      {
        prompt: prompt,
        model: MODEL_NAME,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': API_KEY,
        },
      }
    );

    // Extract and return the generated response
    const responseData = response.data;
    if (responseData && responseData.response) {
      return responseData.response;
    } else {
      throw new Error('No response from API');
    }
  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
}

module.exports = runChat;
