const express = require('express');
const serverless = require('serverless-http');

// Since we can't easily import the TypeScript build for Netlify functions,
// we'll create a minimal version that routes to the existing storage/database logic
// This should be replaced once proper build pipeline is in place

const app = express();
app.use(express.json());

// For now, proxy all requests to the main deployment
// The real fix is to ensure the main build includes database connectivity
app.use('/.netlify/functions/api', (req, res) => {
  res.status(500).json({ 
    message: "Netlify functions are deprecated. Use main deployment with proper DATABASE_URL configuration." 
  });
});

module.exports.handler = serverless(app);