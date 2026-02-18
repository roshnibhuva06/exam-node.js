import express from 'express';


const connectDB = async () => {
    try {
        console.log(`MongoDB Connected successfully!!`);
    } catch (error) {
        console.error('MongoDB connection error:', error);
    }
};

export default connectDB;