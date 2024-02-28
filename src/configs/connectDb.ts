import mongoose from 'mongoose';

const connectDB = async()=>{
    try {
        const connectionString = process.env.MONGODB_URI; 
    
        if (!connectionString) {
          throw new Error('MONGODB_URI not found in environment variables');
        }
    
        await mongoose.connect(connectionString);
        console.log('MongoDB connected successfully');

      } catch (error) {
        console.error('MongoDB connection error:', error);
      }
}

export default connectDB;