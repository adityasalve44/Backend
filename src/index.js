import connectDB from "./db/index.js";      // Import the connectDB function from the "./db/index.js" file
import dotenv from 'dotenv';     // Import the dotenv package to load environment variables from a .env file
import { app } from "./app.js";     // Import the Express application instance from the "./app.js" file

// Load environment variables from the "./env" file
dotenv.config({
    path: './env'
});

// Connect to the database
connectDB()
    .then(() => {
        // Start the server and listen for incoming connections
        app.listen(process.env.PORT || 3000, () => {
            console.log(`Server is running at port ${process.env.PORT}`);
        });
    })
    .catch((error) => {
        // Log an error message if the MongoDB connection fails
        console.log("MongoDB Connection Failed:", error);
    });
