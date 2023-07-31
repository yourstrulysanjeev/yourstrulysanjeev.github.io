
document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        preloader.classList.add('loaded');
      }, 1000);
      setTimeout(() => {
        preloader.remove();
      }, 2000);
    });
  }

  /**
   * Mobile nav toggle
   */
  const mobileNavShow = document.querySelector('.mobile-nav-show');
  const mobileNavHide = document.querySelector('.mobile-nav-hide');

  document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
    el.addEventListener('click', function(event) {
      event.preventDefault();
      mobileNavToogle();
    })
  });

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavShow.classList.toggle('d-none');
    mobileNavHide.classList.toggle('d-none');
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navbar a').forEach(navbarlink => {

    if (!navbarlink.hash) return;

    let section = document.querySelector(navbarlink.hash);
    if (!section) return;

    navbarlink.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');

  navDropdowns.forEach(el => {
    el.addEventListener('click', function(event) {
      if (document.querySelector('.mobile-nav-active')) {
        event.preventDefault();
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('dropdown-active');

        let dropDownIndicator = this.querySelector('.dropdown-indicator');
        dropDownIndicator.classList.toggle('bi-chevron-up');
        dropDownIndicator.classList.toggle('bi-chevron-down');
      }
    })
  });

  /**
   * Scroll top button
   */
  const scrollTop = document.querySelector('.scroll-top');
  if (scrollTop) {
    const togglescrollTop = function() {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
    window.addEventListener('load', togglescrollTop);
    document.addEventListener('scroll', togglescrollTop);
    scrollTop.addEventListener('click', window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }));
  }

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init swiper slider with 1 slide at once in desktop view
   */
  new Swiper('.slides-1', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  /**
   * Init swiper slider with 3 slides at once in desktop view
   */
  new Swiper('.slides-3', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40
      },

      1200: {
        slidesPerView: 3,
      }
    }
  });

  /**
   * Animation on scroll function and init
   */
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', () => {
    aos_init();
  });

});

/**
   * This is js for loop for pictures
   */

const imageUrls = [
  "assets/img/gallery/gallery-1.jpg",
  "assets/img/gallery/gallery-2.jpg",
  "assets/img/gallery/gallery-3.jpg",
  "assets/img/gallery/gallery-4.jpg",
  "assets/img/gallery/gallery-5.jpg",
  "assets/img/gallery/gallery-6.jpg",
  "assets/img/gallery/gallery-7.jpg",
  "assets/img/gallery/gallery-8.jpg",
  "assets/img/gallery/gallery-9.jpg",
  "assets/img/gallery/gallery-10.jpg",
  "assets/img/gallery/gallery-11.jpg",
  "assets/img/gallery/gallery-12.jpg",
  "assets/img/gallery/gallery-13.jpg",
  "assets/img/gallery/gallery-14.jpg",
  "assets/img/gallery/gallery-15.jpg",
  "assets/img/gallery/gallery-16.jpg",
  "assets/img/gallery/gallery-17.jpg",
  "assets/img/gallery/gallery-18.jpg",
  "assets/img/gallery/gallery-19.jpg",
  "assets/img/gallery/gallery-20.jpg",
  "assets/img/gallery/gallery-21.jpg",
  "assets/img/gallery/gallery-22.jpg",
  "assets/img/gallery/gallery-23.jpg",
  "assets/img/gallery/gallery-24.jpg",
  "assets/img/gallery/gallery-25.jpg",
  "assets/img/gallery/gallery-26.jpg",
  "assets/img/gallery/gallery-27.jpg",
  "assets/img/gallery/gallery-28.jpg",
  "assets/img/gallery/gallery-29.jpg",
  "assets/img/gallery/gallery-30.jpg",
  "assets/img/gallery/gallery-31.jpg",
  "assets/img/gallery/gallery-32.jpg",
  "assets/img/gallery/gallery-33.jpg",
  "assets/img/gallery/gallery-34.jpg",
  "assets/img/gallery/gallery-35.jpg",
  "assets/img/gallery/gallery-36.jpg",
  "assets/img/gallery/gallery-37.jpg",
  "assets/img/gallery/gallery-38.jpg",
  "assets/img/gallery/gallery-39.jpg",
  "assets/img/gallery/gallery-40.jpg",
  "assets/img/gallery/gallery-41.jpg",
  "assets/img/gallery/gallery-42.jpg",
  "assets/img/gallery/gallery-43.jpg",
  "assets/img/gallery/gallery-44.jpg",
  "assets/img/gallery/gallery-45.jpg",
  "assets/img/gallery/gallery-46.jpg",
  "assets/img/gallery/gallery-47.jpg",
  "assets/img/gallery/gallery-48.jpg",
  // Add more image URLs here
];

// Function to generate gallery items dynamically
function generateGalleryItem(url, title) {
  return `
  <div class="col-xl-3 col-lg-4 col-md-6">
      <div class="gallery-item h-100">
          <img src="${url}" class="img-fluid" alt="">
          <div class="gallery-links d-flex align-items-center justify-content-center">
              <a href="${url}" title="${title}" class="glightbox preview-link"><i class="bi bi-arrows-angle-expand"></i></a>
          </div>
      </div>
  </div>`;
}

// Get the gallery container
const galleryContainer = document.getElementById("galleryContainer");

// Loop through the imageUrls and generate gallery items
imageUrls.forEach((url, index) => {
  const title = `Gallery ${index + 1}`;
  const galleryItem = generateGalleryItem(url, title);
  galleryContainer.innerHTML += galleryItem;
});

