// Define a custom error class named ApiError which extends the built-in Error class

class ApiError extends Error {

	// Constructor function to initialize properties of the error instance
	
    constructor(
		statusCode,        // HTTP status code associated with the error
		message = "Something went wrong",  // Descriptive message for the error, defaulting to "Something went wrong"
		errors = [],       // Array of additional error details or validation errors associated with the request
		stack = ""         // Stack trace of the error, defaults to an empty string
	) {
		// Call the parent class (Error) constructor with the provided message
		super(message);

		// Set error properties
		this.statusCode = statusCode;  // HTTP status code associated with the error
		this.data = null;               // Additional data related to the error (set to null by default)
		this.message = message;         // Descriptive message for the error
		this.success = false;           // Indicates whether the operation was successful (set to false by default)
		this.errors = errors;           // Array of additional error details or validation errors associated with the request

		// If a stack is provided, set the stack trace of the error
		if (stack) {
			this.stack = stack;
		} else {
			// Otherwise, capture the stack trace using Error.captureStackTrace()
			Error.captureStackTrace(this, this.constructor);
		}
	}
}

// Export the ApiError class to make it available for use in other files or modules
export { ApiError }
