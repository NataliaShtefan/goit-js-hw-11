
export async function fetchImages(query) {
    const API_KEY = "23963114-6d0d5d874ae460d9125bacd21";
    const BASE_URL = "https://pixabay.com/api/";
    
    const params = new URLSearchParams( {
        key: API_KEY,
        q: query,
        image_type: "photo",
        lang: "en",
        safesearch: "true"
    })

const url = `${BASE_URL}?${params}`

    const response = await fetch (url);
    if (!response.ok) {
      throw new Error('Failed to fetch images');
    }
    return response.json();
  }
