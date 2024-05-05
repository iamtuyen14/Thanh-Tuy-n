var images = document.querySelectorAll('.image img');
var prev = document.querySelector('.prev');
var next = document.querySelector('.next');
var close = document.querySelector('.close');
var galleryImg = document.querySelector('.gallery_inner img');
var gallery = document.querySelector('.gallery');

var currentIndex = 0;
var slideshowInterval;

function startSlideshow() {
  slideshowInterval = setInterval(() => {
    if (currentIndex < images.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    showGallery();
  }, 1500);
}

function stopSlideshow() {
  clearInterval(slideshowInterval);
}

function showGallery() {
  if (currentIndex == 0) {
    prev.classList.add('hide');
  } else {
    prev.classList.remove('hide');
  }

  if (currentIndex == images.length - 1) {
    next.classList.add('hide');
  } else {
    next.classList.remove('hide');
  }

  images.forEach((item) => {
    item.classList.add('opacity');
  });
  galleryImg.src = images[currentIndex].getAttribute('src');
  gallery.classList.add('show');
}

images.forEach((item, index) => {
  item.addEventListener('click', function () {
    currentIndex = index;
    showGallery();
    startSlideshow();
  });
});

close.addEventListener('click', function () {
  images.forEach((item) => {
    item.classList.remove('opacity');
  });
  gallery.classList.remove('show');
  stopSlideshow();
});

prev.addEventListener('click', function () {
  if (currentIndex > 0) {
    currentIndex--;
    showGallery();
    stopSlideshow();
  }
});

next.addEventListener('click', function () {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    showGallery();
    stopSlideshow();
  }
});

//Xử lý ẩn gallery khi nhấn phím esc trên bàn phím
document.addEventListener('keydown', function (event) {
  if (event.keyCode === 27) {
    images.forEach((item) => {
      item.classList.remove('opacity');
    });
    gallery.classList.remove('show');
    stopSlideshow();
  }
});
