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
  <img class="gallery__image" src="${preview}" data-caption="${description}" />
</a>
</div>`;
    })

    .join('');
}
function imageClickAction(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains('gallery__image')) {
    return;
  }
  new SimpleLightbox('.gallery a', {
    /* options */
  });
  //   let galleryy = new SimpleLightbox('.gallery ');
  //   gallery.on('show.simplelightbox', function () {
  //     // Do something…
  //   });

  //   galleryy.on('error.simplelightbox', function (e) {
  //     console.log(e); // Some usefull information
  //   });

  // with jQuery nearly the same
  //   let gallery = $('.gallery ').simpleLightbox();
  //   gallery.on('show.simplelightbox', function () {
  //     // Do something…
  //   });
}
