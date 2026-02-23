require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/errorHandler');

const authRoutes = require('./routes/authRoutes');
const courseRoutes = require('./routes/courseRoutes');
const universityRoutes = require('./routes/universityRoutes');
const serviceRoutes = require('./routes/serviceRoutes');
const inquiryRoutes = require('./routes/inquiryRoutes');
const enrollmentRoutes = require('./routes/enrollmentRoutes');
const partnershipRoutes = require('./routes/partnershipRoutes');
const newsletterRoutes = require('./routes/newsletter');
const resourceRoutes = require('./routes/resourceRoutes');

const app = express();

// CORS Configuration - Allow Vercel deployments
const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:3001',
  'https://gd-73zs.vercel.app', // Your frontend
  process.env.FRONTEND_URL
].filter(Boolean);

const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    // Allow all Vercel domains
    if (origin && origin.includes('.vercel.app')) {
      return callback(null, true);
    }
    
    // Allow configured origins
    if (allowedOrigins.indexOf(origin) !== -1) {
      return callback(null, true);
    }
    
    // In development, allow all
    if (process.env.NODE_ENV === 'development') {
      return callback(null, true);
    }
    
    // Allow all for now (can restrict later)
    callback(null, true);
  },
  credentials: true,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check endpoint
app.get('/', (req, res) => {
  res.json({ 
    message: 'Global Education Council API',
    status: 'running',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/universities', universityRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/inquiries', inquiryRoutes);
app.use('/api/enrollments', enrollmentRoutes);
app.use('/api/partnerships', partnershipRoutes);
app.use('/api/newsletter', newsletterRoutes);
app.use('/api/resources', resourceRoutes);

// Error Handler Middleware (must be last)
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

// Start server first, then connect to MongoDB
// Listen on 0.0.0.0 to accept connections from other devices on the network
app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Server running on port ${PORT}`);
  console.log(`✅ Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`✅ Local: http://localhost:${PORT}/api`);
  console.log(`✅ Network: http://<your-ip>:${PORT}/api`);
  console.log(`💡 To access from other devices, use your computer's IP address`);
  
  // Connect to MongoDB after server starts
  connectDB().catch(err => {
    console.error('❌ MongoDB connection failed:', err.message);
    console.error('⚠️  Server will continue running without database');
  });
});
