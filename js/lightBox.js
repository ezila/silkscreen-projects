const images = document.querySelectorAll('.img');

images.forEach(image => {
  image.addEventListener('click', () => {
    addOverlay();
    addCloseBtn();
    image.classList.add('img-lightbox');
  });
});

function addOverlay() {
  let overlay = document.createElement('div');
  overlay.className = 'overlay';
  document.body.appendChild(overlay);
}

function addCloseBtn() {
  let closeBtn = document.createElement('button');
  closeBtn.className = 'close-btn';
  closeBtn.innerHTML = 'x';

  closeBtn.addEventListener('click', () => {
    let lo = document.querySelector('.overlay');
    let btn = document.querySelector('.close-btn');
    lo.parentNode.removeChild(lo);
    btn.parentNode.removeChild(btn);

    images.forEach(image => {
      if (image.classList.contains('img-lightbox')) {
        image.classList.remove('img-lightbox');
      }
    });
  });
  document.body.appendChild(closeBtn);
}