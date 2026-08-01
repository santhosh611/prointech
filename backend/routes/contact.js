const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, '../data/inquiries.json');

// Ensure data directory and file exist
function ensureDataFile() {
  const dir = path.dirname(DATA_FILE);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify([], null, 2));
  }
}

router.post('/', (req, res) => {
  try {
    const { name, email, company, service, message } = req.body;

    // Basic Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Please fill in all required fields (Name, Email, Message).'
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid email address.'
      });
    }

    ensureDataFile();

    const rawData = fs.readFileSync(DATA_FILE, 'utf8');
    let inquiries = [];
    try {
      inquiries = JSON.parse(rawData);
    } catch (e) {
      inquiries = [];
    }

    const newInquiry = {
      id: 'INQ-' + Date.now().toString(36).toUpperCase() + '-' + Math.random().toString(36).substring(2, 6).toUpperCase(),
      timestamp: new Date().toISOString(),
      name: name.trim(),
      email: email.trim(),
      company: (company || '').trim() || 'N/A',
      service: service || 'General Enterprise Inquiry',
      message: message.trim(),
      status: 'NEW'
    };

    inquiries.unshift(newInquiry);
    fs.writeFileSync(DATA_FILE, JSON.stringify(inquiries, null, 2));

    console.log(`[POST /api/contact] Saved inquiry ${newInquiry.id} from ${newInquiry.email}`);

    return res.status(200).json({
      success: true,
      message: 'Thank you for reaching out to Proinfocus Pte Ltd. An enterprise solutions advisor will connect with you within 24 hours.',
      inquiryId: newInquiry.id,
      timestamp: newInquiry.timestamp
    });
  } catch (error) {
    console.error('Error handling contact submission:', error);
    return res.status(500).json({
      success: false,
      error: 'An internal error occurred while processing your request. Please try again later.'
    });
  }
});

// GET /api/contact/list (For internal administrative verification)
router.get('/list', (req, res) => {
  try {
    ensureDataFile();
    const rawData = fs.readFileSync(DATA_FILE, 'utf8');
    const inquiries = JSON.parse(rawData);
    return res.status(200).json({ success: true, count: inquiries.length, data: inquiries });
  } catch (error) {
    return res.status(500).json({ success: false, error: 'Failed to read inquiries log.' });
  }
});

module.exports = router;
