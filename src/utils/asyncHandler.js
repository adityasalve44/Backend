// Define a higher-order function named asyncHandler

const asyncHandler = (requestHandler) => {      // Return a function to handle asynchronous request handlers

    return (req, res, next) => {    // Wrap the requestHandler in a Promise to handle asynchronous operations
        
        Promise.resolve(requestHandler(req, res, next))
           
            .catch((error) => {   // Handle any errors that occur during the execution of the requestHandler
                
                next(error);        // Pass the error to the Express error handling middleware
            });
    };
};

// Export the asyncHandler function to make it available for use in other files or modules
export { asyncHandler };
