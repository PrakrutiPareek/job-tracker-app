

import  handleApiError  from "../utils/handleApiError";

const apiRequest = async (apiCall) => {
  try {
    return await apiCall();
  } catch (error) {
    throw new Error(handleApiError(error), { cause: error });
  }
};


export default apiRequest;