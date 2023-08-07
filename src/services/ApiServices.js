import axios from "axios";

export const fetchAllCountry = async () => {
  try {
    const response = await axios.get("https://restcountries.com/v3.1/all");
    return response.data;
  } catch (error) {
    // Handle error if the API request fails
    console.error("Error fetching books:", error);
    throw error;
  }
};


export const register = async () => {
  try {
    const response = await axios.get(" ");
    return response.data;
  } catch (error) {
    // Handle error if the API request fails
    console.error("Error fetching books:", error);
    throw error;
  }
};