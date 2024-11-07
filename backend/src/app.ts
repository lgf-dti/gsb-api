import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/user';

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);


// MongoDB Connection
mongoose.connect('mongodb+srv://davidtissot:szYUyTKg35hLPF4q@cluster0.7xtdxoh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });

export default app;


