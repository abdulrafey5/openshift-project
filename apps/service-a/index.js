const express = require('express');
const cors = require('cors');
const os = require('os');

const app = express();
const port = process.env.PORT || 8080;

// Your actual frontend URL
const FRONTEND_ORIGIN = 'https://frontend-abdulrafey5-dev.apps.rm2.thpm.p1.openshiftapps.com';

// CORS configuration
app.use(cors({
  origin: FRONTEND_ORIGIN,
  methods: ['GET','POST','PUT','DELETE','OPTIONS'],
  allowedHeaders: ['Content-Type','Authorization'],
  credentials: false
}));

// Handle preflight requests
app.options('*', cors({
  origin: FRONTEND_ORIGIN,
  methods: ['GET','POST','PUT','DELETE','OPTIONS'],
  allowedHeaders: ['Content-Type','Authorization'],
  credentials: false
}));

// Health check route
app.get('/health', (req, res) => res.send('OK'));

// Main API route
app.get('/api', (req, res) => {
  res.json({
    service: 'service-a',
    host: os.hostname(),
    time: new Date().toISOString()
  });
});

app.listen(port, () => console.log(`service-a listening on ${port}`));

