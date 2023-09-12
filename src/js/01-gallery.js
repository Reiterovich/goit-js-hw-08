// // Описаний в документації
import SimpleLightbox from 'simplelightbox';
// // Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above (вище) this line
import { galleryItems } from './gallery-items';
// Change code below (під) this line

console.log(galleryItems);

const galleryCont = document.querySelector('.gallery');
const galleryFun = createImg(galleryItems);

galleryCont.insertAdjacentHTML('afterbegin', galleryFun);

function createImg(galleryItems) {
  const imgEl = galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
         <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
   </li>`;
    })
    .join('');

  return imgEl;
}

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
