import axios from "axios";

// Simple in-memory cache
const cache = new Map();

export default async function getData(url, exNum) {
  try {
    // Create a unique cache key based on the URL and parameters
    const cacheKey = exNum ? `${url}?exId=${exNum}` : url;

    // Check if data is in cache
    if (cache.has(cacheKey)) {
      console.log('Returning cached data');
      return cache.get(cacheKey);
    }

    // Fetch data from API
    const response = await axios.get(url, {
      params: exNum ? { exId: exNum } : {},
    });

    // Cache the response data
    cache.set(cacheKey, response.data);

    // Return the fetched data
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;  // Re-throw the error to be handled by the calling code
  }
}
