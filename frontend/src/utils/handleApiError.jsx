// Utility function to handle API errors and return user-friendly messages
const handleApiError = (error) => {
  console.error("API Error:", error);
  if (error.response) {
    return (
      error.response.data?.message ||
      error.response.data?.error ||
      "Something went wrong on the server."
    );
  }
  if (error.request) {
    return "Unable to connect to the server.Please try again later.";
  }
  return error.message || "Unexpected error occurred.";
};

export default handleApiError;
