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
function imageClickAction(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains('gallery__image')) {
    return;
  }
  1;

  const options = {
    captions: true,
    captionDelay: 200,
    captionSelector: 'alt',
    captionType: 'text',
    captionPosition: 'bottom',
  };
  new SimpleLightbox('.gallery a', {
    options,
  });
}
