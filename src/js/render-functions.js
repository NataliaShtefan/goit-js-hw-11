

const gallery = document.querySelector(".gallery");  



import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

let lightbox = new SimpleLightbox('.gallery li', {
  caption: true,
  captionsData: 'alt',
  captionDelay: 250,
});;

 export function createGallery (arr) {
gallery.innerHTML =  arr.map((image) => 
  `<li class="gallery-item">
<a href="${image.largeImageURL}" >
  <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy">
  </a>
  <div class="info">
    <p><b>Likes</b> ${image.likes}</p>
    <p><b>Views</b> ${image.views}</p>
    <p><b>Comments</b> ${image.comments}</p>
    <p><b>Downloads</b> ${image.downloads}</p>
  </div>

</li>`).join('');
  
lightbox.refresh();
}
  
export function showError(message) {
    iziToast.error({
      title: 'Error',
      message: message,
      position: 'topRight'
    });
  }



  export function clearGallery() {
    const gallery = document.querySelector('.gallery');
    gallery.innerHTML = '';
  }
  
  export function showLoader() {
    console.log('+');
    document.querySelector('.div-loader').classList.remove('hidden');
  }
  
  export function hideLoader() {
    console.log('-');
      document.querySelector('.div-loader').classList.add('hidden');
    
  }