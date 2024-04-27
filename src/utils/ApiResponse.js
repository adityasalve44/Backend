// Define a class named ApiResponse

class ApiResponse {

    // Constructor function to initialize properties of the response instance
    
    constructor(statusCode, data, message = "Success") {
        // Set response properties
        this.statusCode = statusCode;      // HTTP status code associated with the response
        this.data = data;                  // Data payload of the response
        this.message = message;            // Descriptive message for the response (default: "Success")
        this.success = statusCode < 400;  // Indicates whether the operation was successful
    }
}

// Export the ApiResponse class to make it available for use in other files or modules
export { ApiResponse }
