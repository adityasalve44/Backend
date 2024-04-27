import express from "express";
import cors from "cors";  // Middleware for handling Cross-Origin Resource Sharing (CORS)
import cookieParser from "cookie-parser";  // Middleware for parsing cookies attached to the client's request

const app = express();

// Enable CORS with the specified origin and credentials
app.use(
    cors({
        origin: process.env.CORS_ORIGIN,  // Origin specifies the allowed origins for CORS requests
        credentials: true,  // Credentials indicate whether to include cookies and other credentials with cross-origin requests
    })
);


app.use(express.json({ limit: "20kb" }));       // Parse incoming requests with JSON payloads, limit to 20kb

app.use(express.urlencoded({ extended: true, limit: "20kb" }));     // Parse incoming URL-encoded payloads with extended mode for nested objects and arrays, limit to 20kb

app.use(express.static("public"));      // Serve static files from the 'public' directory

app.use(cookieParser());        // Parse cookies attached to the client's request

export { app };
