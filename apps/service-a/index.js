const express = require('express');
const cors = require('cors');
const os = require('os');

const app = express();
const port = process.env.PORT || 8080;

// FRONTEND origin (same as before)
const FRONTEND_ORIGIN = 'https://frontend-abdulrafey5-dev.apps.rm2.thpm.p1.openshiftapps.com';

// CORS
app.use(cors({
  origin: FRONTEND_ORIGIN,
  methods: ['GET','POST','PUT','DELETE','OPTIONS'],
  allowedHeaders: ['Content-Type','Authorization'],
  credentials: false
}));
app.options('*', cors());

// canary flag from env
const isCanary = process.env.CANARY === 'true' || false;

app.get('/health', (req, res) => res.send('OK'));

app.get('/api', (req, res) => {
  res.json({
    service: 'service-a',
    host: os.hostname(),
    time: new Date().toISOString(),
    canary: isCanary
  });
});

app.listen(port, () => console.log(`service-a listening on ${port} (canary=${isCanary})`));

