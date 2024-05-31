
import { fetchImages } from "./js/pixabay-api";
import { createGallery, showError, clearGallery, showLoader, hideLoader } from "./js/render-functions";

document.querySelector('.search-form').addEventListener("submit", async (event) => {
  event.preventDefault();
  const query = event.target.elements.images.value.trim();
  if (!query) {
    showError('Please enter a search query');
    return;
  }
  clearGallery();
  showLoader();
  try {
    const data = await fetchImages(query);
    if (data.hits.length === 0) {
      showError('Sorry, there are no images matching your search query. Please try again!');
    } else {
      createGallery(data.hits);
    }
  } catch (error) {
    showError(error.message);
  } finally {
    hideLoader();
  }
});