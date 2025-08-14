const express = require('express');
const os = require('os');
const app = express();
const port = process.env.PORT || 8080;
app.get('/health', (req,res) => res.send('OK'));
app.get('/api', (req,res) => {
	  res.json({ service: 'service-a', host: os.hostname(), time: new Date().toISOString() });
});
app.listen(port, ()=> console.log(`service-a listening on ${port}`));
