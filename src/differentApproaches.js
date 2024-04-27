// Import the express module
const express = require('express');

// Import the mongoose module for MongoDB interaction
const mongoose = require('mongoose');

// Load environment variables from the .env file
require('dotenv').config();

// Set up the express application
const app = express();

// DataBase Connection
(async () => {
    try {
        // Connect to the MongoDB database using the provided URI and database name
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log("Connected to the database");
    } catch (error) {
        // Log and throw an error if the database connection fails
        console.error("ERROR: ", error);
        throw error;
    }
})();

// Start the express server and listen for incoming connections
app.listen(process.env.PORT, () => {
    console.log(`App is listening on port , ${process.env.PORT}`);
});

// AsyncHandler Wrapper
const asyncHandler = (fn) => async (req, res, next) => {
    try {
        // Execute the provided asynchronous function
        await fn(req, res, next);
    } catch (error) {
        // Handle errors by sending an error response with the error message
        res.status(error.code || 500).json({
            success: false,
            message: error.message
        });
    }
};
