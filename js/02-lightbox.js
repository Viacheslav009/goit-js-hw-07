import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const imageContainer = document.querySelector('.gallery');
const imageMarkup = creteImageCardMarkup(galleryItems);
imageContainer.insertAdjacentHTML('beforeend', imageMarkup);
imageContainer.addEventListener('click', imageClickAction);
function creteImageCardMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
`;
    })

    .join('');
}

const options = {
  // captions: true,
  captionDelay: 250,

  captionPosition: 'bottom',
  captionsData: 'alt',
};
new SimpleLightbox('.gallery a', options);

function imageClickAction(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains('gallery__image')) {
    return;
  }
}
