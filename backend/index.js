const express = require('express');
const cors = require('cors');
const contactRoute = require('./routes/contact');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logging middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', service: 'Pro In Focus Enterprise Backend', time: new Date().toISOString() });
});

// Contact Route
app.use('/api/contact', contactRoute);

app.listen(PORT, () => {
  console.log(`====================================================`);
  console.log(`Pro In Focus Backend Service listening on port ${PORT}`);
  console.log(`Contact endpoint: http://localhost:${PORT}/api/contact`);
  console.log(`====================================================`);
});
